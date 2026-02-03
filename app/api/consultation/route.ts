import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_SEND_TO = process.env.RESEND_SEND_TO ?? "knp02@naver.com"
const DATABASE_URL = process.env.DATABASE_URL
const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL

const sanitize = (value: unknown) => {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim()
  }
  return "정보 없음"
}

const buildPlainText = (data: Record<string, string>) =>
  Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")

const getClientIP = (request: Request): string => {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIP = request.headers.get("x-real-ip")
  const cfIP = request.headers.get("cf-connecting-ip")

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  if (cfIP) {
    return cfIP
  }
  if (realIP) {
    return realIP
  }
  return "알 수 없음"
}

export async function POST(request: Request) {
  const body = await request.json()

  const clientIP = body.user_ip || getClientIP(request)
  const timestamp = new Date().toISOString()
  const userAgent = request.headers.get("user-agent") || "알 수 없음"
  const referer = request.headers.get("referer") || "직접 접속"

  const payload = {
    name: sanitize(body.name),
    phone: sanitize(body.phone),
    consultation_field: sanitize(body.consultation_field),
    region: sanitize(body.region),
    message: sanitize(body.message),
    ip: clientIP,
    timestamp: timestamp,
    userAgent: userAgent,
    referer: referer,
  }

  console.log("[v0] 상담 신청 데이터:", payload)

  if (DATABASE_URL) {
    try {
      const sql = neon(DATABASE_URL)
      await sql`
        INSERT INTO consultations (name, phone, consultation_type, region, message)
        VALUES (${payload.name}, ${payload.phone}, ${payload.consultation_field}, ${payload.region}, ${payload.message})
      `
      console.log("[v0] 데이터베이스 저장 완료")
    } catch (error) {
      console.error("[v0] 데이터베이스 저장 실패:", error)
    }
  }

  if (!ZAPIER_WEBHOOK_URL) {
    console.error("[v0] ZAPIER_WEBHOOK_URL이 설정되지 않았습니다!")
    return NextResponse.json({ error: "ZAPIER_WEBHOOK_URL이 설정되어 있지 않습니다." }, { status: 500 })
  }

  console.log("[v0] Zapier webhook 전송 시작")

  try {
    const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        phone: payload.phone,
        consultation_field: payload.consultation_field,
        region: payload.region,
        message: payload.message,
        ip: payload.ip,
        timestamp: payload.timestamp,
        userAgent: payload.userAgent,
        referer: payload.referer,
      }),
    })

    console.log("[v0] Zapier webhook 응답 상태:", zapierResponse.status)
    const responseText = await zapierResponse.text()
    console.log("[v0] Zapier webhook 응답 내용:", responseText)

    if (!zapierResponse.ok) {
      return NextResponse.json({ error: "Zapier 전송 실패" }, { status: 500 })
    }
  } catch (error) {
    console.error("[v0] Zapier webhook 전송 오류:", error)
    return NextResponse.json({ error: "Zapier 전송 중 오류 발생" }, { status: 500 })
  }

  if (RESEND_API_KEY) {
    try {
      const subject = `상담 신청 알림: ${payload.name}`
      const htmlContent = `
        <h2>상담 신청이 접수되었습니다.</h2>
        <p><strong>이름:</strong> ${payload.name}</p>
        <p><strong>연락처:</strong> ${payload.phone}</p>
        <p><strong>상담 분야:</strong> ${payload.consultation_field}</p>
        <p><strong>지역:</strong> ${payload.region}</p>
        <p><strong>내용:</strong><br/>${payload.message.replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p style="color: #666; font-size: 12px;">
          <strong>접수 시간:</strong> ${new Date(timestamp).toLocaleString("ko-KR")}<br/>
          <strong>IP 주소:</strong> ${clientIP}<br/>
          <strong>접속 경로:</strong> ${referer}
        </p>
      `

      let fromAddress = "김앤파트너스 상담 <onboarding@resend.dev>"
      if (process.env.RESEND_FROM_BASE_DOMAIN) {
        fromAddress = `김앤파트너스 상담 <onboarding@${process.env.RESEND_FROM_BASE_DOMAIN}>`
      }

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [RESEND_SEND_TO],
          subject,
          html: htmlContent,
          text: buildPlainText({
            이름: payload.name,
            연락처: payload.phone,
            "상담 분야": payload.consultation_field,
            지역: payload.region,
            내용: payload.message,
            "IP 주소": payload.ip,
            "접수 시간": new Date(timestamp).toLocaleString("ko-KR"),
            "접속 경로": payload.referer,
          }),
        }),
      })

      if (resendResponse.ok) {
        console.log("[v0] 이메일 발송 완료")
      } else {
        console.error("[v0] 이메일 발송 실패:", await resendResponse.text())
      }
    } catch (error) {
      console.error("[v0] 이메일 발송 오류:", error)
    }
  }

  return NextResponse.json({ ok: true })
}
