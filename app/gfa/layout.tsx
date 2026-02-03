import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "창원개인회생 무료상담 신청 | 법무법인 김앤파트너스",
  description: "창원개인회생, 창원개인파산 무료상담 신청. 회생파산전문변호사가 직접 상담해드립니다. 빠르고 정확한 채무 해결, 무료상담 1577-1097",
  keywords: "창원개인회생 상담, 창원개인파산 상담, 무료상담, 개인회생 신청, 법무법인 김앤파트너스",
  robots: {
    index: true,
    follow: true,
  },
}

export default function GFALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
