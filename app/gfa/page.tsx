"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function GFAPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [privacyConsent, setPrivacyConsent] = useState(true)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    if (!privacyConsent) {
      alert("개인정보 수집 및 이용에 동의해주세요.")
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      setIsSubmitting(true)

      let userIP = "알 수 없음"
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json", {
          method: "GET",
          signal: AbortSignal.timeout(5000),
        })
        if (ipResponse.ok) {
          const ipData = await ipResponse.json()
          userIP = ipData.ip
        }
      } catch (ipError) {
        console.warn("IP 수집 실패 (계속 진행):", ipError)
      }

      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          consultation_field: formData.get("consultation-type"),
          region: formData.get("region"),
          message: formData.get("message") || "",
          user_ip: userIP,
        }),
        signal: AbortSignal.timeout(10000),
      })

      if (response.ok || response.status === 200) {
        form.reset()
        router.push("/thank-you")
      } else {
        const errorText = await response.text()
        console.error("API 오류 응답:", errorText)
        throw new Error(`전송 실패 (상태: ${response.status})`)
      }
    } catch (error) {
      console.error("폼 제출 오류:", error)

      if (error instanceof Error) {
        if (error.name === "TimeoutError") {
          alert("전송 시간이 초과되었습니다. 인터넷 연결을 확인하고 다시 시도해주세요.")
        } else {
          alert(`전송 중 문제가 발생했습니다: ${error.message}\n다시 시도해주세요.`)
        }
      } else {
        alert("전송 중 문제가 발생했습니다. 다시 시도해주세요.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c4e6f] to-[#2a5f7f] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#1c4e6f] mb-2">회생파산전문변호사 상담 신청</h1>
          <p className="text-gray-600">빠르고 정확한 상담을 위해 아래 정보를 입력해주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
              이름 *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#1c4e6f] focus:outline-none focus:ring-2 focus:ring-[#1c4e6f]/20"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
              연락처 *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#1c4e6f] focus:outline-none focus:ring-2 focus:ring-[#1c4e6f]/20"
              placeholder="연락처를 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="consultation-type" className="mb-2 block text-sm font-medium text-gray-700">
              상담분야 *
            </label>
            <select
              id="consultation-type"
              name="consultation-type"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#1c4e6f] focus:outline-none focus:ring-2 focus:ring-[#1c4e6f]/20"
            >
              <option value="">선택하세요</option>
              <option value="개인회생">개인회생</option>
              <option value="개인파산">개인파산</option>
            </select>
          </div>

          <div>
            <label htmlFor="region" className="mb-2 block text-sm font-medium text-gray-700">
              지역선택 *
            </label>
            <select
              id="region"
              name="region"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#1c4e6f] focus:outline-none focus:ring-2 focus:ring-[#1c4e6f]/20"
            >
              <option value="">선택하세요</option>
              <option value="창원·경남">창원·경남</option>
              <option value="부산·울산">부산·울산</option>
              <option value="대구·경북">대구·경북</option>
              <option value="서울">서울</option>
              <option value="경기·인천">경기·인천</option>
              <option value="충청·대전">충청·대전</option>
              <option value="전라·광주">전라·광주</option>
              <option value="강원·제주">강원·제주</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
              상담 내용 (선택사항)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#1c4e6f] focus:outline-none focus:ring-2 focus:ring-[#1c4e6f]/20"
              placeholder="여기에 상담 내용을 적어주세요. (통화 가능한 시간을 함께 적어주시면 맞춰서 연락드립니다.)"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              id="privacy-consent"
              type="checkbox"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1c4e6f] focus:ring-[#1c4e6f] focus:ring-offset-0"
            />
            <label htmlFor="privacy-consent" className="text-sm text-gray-700">
              개인정보 수집 및 이용에 동의합니다. *{" "}
              <button
                type="button"
                onClick={() => window.open("/privacy-policy", "_blank")}
                className="text-[#1c4e6f] underline hover:text-[#1c4e6f]/80"
              >
                내용보기
              </button>
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-6 text-lg text-white bg-[#9d5443] hover:bg-[#b55e38]"
          >
            {isSubmitting ? "전송 중..." : "신청하기"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-[#1c4e6f] hover:underline">
            메인페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  )
}
