"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ConsultationModal } from "@/components/consultation-modal"

export function CorpHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1c4e6f] via-[#2d5f7f] to-[#1c4e6f] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              대표님,
              <br />
              법인 통장에 돈 넣지 마세요.
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-[#ffd27f] mb-6">지금 입금하는 순간, 전부 묶입니다.</p>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              법인파산 관재인 출신 변호사가
              <br />
              은행의 '상계 처리'로부터 회사 운영 자금과 급여,
              <br />
              그리고 대표님의 내일까지 지켜드립니다.
            </p>
            <Button
              onClick={scrollToNextSection}
              size="lg"
              className="bg-[#9d5443] hover:bg-[#B85A30] text-white text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              내 회사 자금 보호 방법 확인하기
            </Button>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
