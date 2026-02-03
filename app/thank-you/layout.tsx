import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "상담 신청 완료 | 법무법인 김앤파트너스",
  description: "상담 신청이 완료되었습니다. 창원개인회생, 창원개인파산 전문 법무법인 김앤파트너스에서 빠르게 연락드리겠습니다.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
