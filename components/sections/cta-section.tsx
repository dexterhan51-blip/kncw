"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { useState } from "react"

export function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="cta" className="bg-[#1c4e6f] py-16 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-12 space-y-6 text-center">
          <p className="text-xl text-white/90 md:text-2xl text-center">"일주일 만에 독촉 전화가 끊겼어요"</p>
          <p className="text-xl text-white/90 md:text-2xl text-center">"3억 빚이 4,000만 원으로 줄었습니다"</p>
          <p className="text-xl text-white/90 md:text-2xl text-center">"다시 세상을 살아볼 용기가 생겼습니다"</p>
        </div>

        <p className="mb-4 text-2xl font-bold text-white md:text-3xl text-center">실제 의뢰인들의 이야기입니다.</p>
        <p className="mb-12 text-3xl font-bold text-white md:text-4xl text-center">
          다음 성공 사례의 주인공은 당신입니다.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center px-4">
          <Button
            size="lg"
            className="bg-[#9d5443] w-full sm:w-auto px-4 py-8 md:px-12 md:py-10 text-xl md:text-2xl font-bold text-white hover:bg-[#b55e38] cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            상담 신청하기
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent w-full sm:w-auto px-4 py-8 md:px-12 md:py-10 text-xl md:text-2xl font-bold text-white hover:bg-white cursor-pointer hover:text-[#9d5443]"
            onClick={() => (window.location.href = "tel:1577-1097")}
          >
            <Phone className="mr-2 h-5 w-5" />
            전화 상담하기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent w-full sm:w-auto px-4 py-8 md:px-12 md:py-10 text-xl md:text-2xl font-bold text-white hover:bg-white cursor-pointer hover:text-[#9d5443]"
            onClick={() => window.open("https://pf.kakao.com/_uxmxgsK/chat?entry=new", "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            카카오톡 상담하기
          </Button>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
