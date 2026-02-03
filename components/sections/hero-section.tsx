"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { AnimatedCounter } from "@/components/animated-counter"
import { useState } from "react"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="hero" className="relative py-16 px-4 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/changwon-court-night.webp"
          alt="창원개인회생 창원개인파산 전문 법무법인 김앤파트너스 - 창원지방법원 인근"
          fill
          className="object-cover object-[85%_center] md:object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center flex flex-col items-center gap-4">
            <div className="relative h-8 w-48 md:h-10 md:w-60">
              <Image
                src="/img_logo_w.svg"
                alt="창원개인회생 창원개인파산 법무법인 김앤파트너스 로고"
                fill
                sizes="(max-width: 768px) 12rem, 15rem"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="mt-16 md:mt-20 mb-8 text-center leading-tight text-white text-balance">
            <span className="block text-5xl font-bold md:text-6xl lg:text-7xl mb-2">창원·경남의 빚 문제</span>
            <span className="block text-4xl font-bold md:text-5xl lg:text-6xl">바로 여기에서 해결하세요.</span>
          </h1>

          <div className="mb-10 mt-8 text-center">
            <p className="text-xl text-white/95 md:text-2xl leading-relaxed mb-6">
              창원에서 시작해 전국으로 성장한 김앤파트너스,
              <br />
              누구보다 창원·부산법원의 실무를 가장 잘 알고 있습니다.
            </p>
            <p className="text-xl text-white/95 md:text-2xl leading-relaxed">
              이미{" "}
              <span className="font-bold" style={{ color: "#FFFFFF" }}>
                <AnimatedCounter end={9375} separator className="text-3xl md:text-4xl" style={{ color: "#FFFFFF" }} />명
              </span>
              의 의뢰인이
              <br />
              <span className="font-bold" style={{ color: "#FFFFFF" }}>
                <AnimatedCounter end={6765} separator className="text-3xl md:text-4xl" style={{ color: "#FFFFFF" }} />억
                원
              </span>
              의 채무로부터 자유로워졌습니다.
            </p>
            <p className="text-xl text-white/95 md:text-2xl leading-relaxed mt-6">
              <br />
            </p>
          </div>

          <div className="mx-auto max-w-2xl px-4 text-center mb-10 mt-2">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full px-4 py-8 md:px-12 md:py-10 text-xl md:text-2xl font-bold text-white shadow-xl cursor-pointer bg-[#9d5443] hover:bg-[#B85A30]"
            >
              우리 지역 전문가와 상담하기
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>

          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-3 md:gap-8 text-white/95">
              <div className="flex flex-col items-center text-center gap-2 w-full md:w-auto justify-center md:flex-row md:items-start md:text-left md:justify-start">
                <CheckCircle className="h-5 w-5 text-[#9d5443] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-xl md:text-xl font-medium md:whitespace-nowrap">회생·파산 전문팀 구성</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 w-full md:w-auto justify-center md:flex-row md:items-start md:text-left md:justify-start">
                <CheckCircle className="h-5 w-5 text-[#9d5443] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-xl md:text-xl font-medium md:whitespace-nowrap">80~90% 채무액 탕감</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 w-full md:w-auto justify-center md:flex-row md:items-start md:text-left md:justify-start">
                <CheckCircle className="h-5 w-5 text-[#9d5443] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-xl md:text-xl font-medium md:whitespace-nowrap">개인정보 철저 보호</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
