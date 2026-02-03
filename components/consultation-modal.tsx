"use client"

import type React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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
          console.log("[v0] 사용자 IP:", userIP)
        }
      } catch (ipError) {
        console.warn("[v0] IP 수집 실패 (계속 진행):", ipError)
      }

      const timestamp = new Date().toISOString()

      const params = new URLSearchParams()
      params.append("name", formData.get("name") as string)
      params.append("phone", formData.get("phone") as string)
      params.append("consultation_field", formData.get("consultation-type") as string)
      params.append("region", formData.get("region") as string)
      params.append("message", (formData.get("message") as string) || "")
      params.append("user_ip", userIP)
      params.append("timestamp", timestamp)

      console.log("[v0] Zapier로 전송할 데이터:", Object.fromEntries(params))

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

      console.log("[v0] API 응답 상태:", response.status)

      if (response.ok || response.status === 200) {
        console.log("[v0] 전송 성공")

        form.reset()
        onClose()
        router.push("/thank-you")
      } else {
        const errorText = await response.text()
        console.error("[v0] API 오류 응답:", errorText)
        throw new Error(`전송 실패 (상태: ${response.status})`)
      }
    } catch (error) {
      console.error("[v0] 폼 제출 오류:", error)

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">회생파산전문변호사 상담 신청</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            빠르고 정확한 상담을 위해 아래 정보를 입력해주세요.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              이름 *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
              연락처 *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-lg border border-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
              placeholder="연락처를 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="consultation-type" className="mb-2 block text-sm font-medium text-foreground">
              상담분야 *
            </label>
            <select
              id="consultation-type"
              name="consultation-type"
              required
              className="w-full rounded-lg border border-input px-4 py-3 text-foreground focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
            >
              <option value="">선택하세요</option>
              <option value="개인회생">개인회생</option>
              <option value="개인파산">개인파산</option>
            </select>
          </div>

          <div>
            <label htmlFor="region" className="mb-2 block text-sm font-medium text-foreground">
              지역선택 *
            </label>
            <select
              id="region"
              name="region"
              required
              className="w-full rounded-lg border border-input px-4 py-3 text-foreground focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
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
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              상담 내용 (선택사항)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/20"
              placeholder="여기에 상담 내용을 적어주세요. (통화 가능한 시간을 함께 적어주시면 맞춰서 연락드립니다.)"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              id="privacy-consent"
              type="checkbox"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-input text-trust focus:ring-trust focus:ring-offset-0"
            />
            <label htmlFor="privacy-consent" className="text-sm text-foreground">
              개인정보 수집 및 이용에 동의합니다. *{" "}
              <button
                type="button"
                onClick={() => window.open("/privacy-policy", "_blank")}
                className="text-trust underline hover:text-trust/80"
              >
                내용보기
              </button>
            </label>
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              취소
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1 text-white bg-[#9d5443] hover:bg-[#b55e38]">
              {isSubmitting ? "전송 중..." : "신청하기"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
