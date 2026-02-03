"use client"

import type React from "react"
import {
  Award,
  CheckCircle,
  TrendingDown,
  Users,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useEffect, useState, useRef } from "react"

export function CredibilitySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openStatIndex, setOpenStatIndex] = useState<number | null>(null)

  const stats = [
    {
      icon: Users,
      component: (
        <div className="mb-3 text-4xl font-bold text-hope">
          <AnimatedCounter end={9375} separator className="inline-block" />
          건+
        </div>
      ),
      title: "누적 처리 건수",
      description: "2014년부터 현재까지 풍부한\n개인회생·파산 사건 처리 경험",
    },
    {
      icon: Award,
      component: <div className="mb-3 text-4xl font-bold text-hope">1% 이내</div>,
      title: "사건 기각률",
      description: "자사 귀책 사유 시 책임 보장\n업계 최고 수준의 성공률",
    },
    {
      icon: TrendingDown,
      component: <div className="mb-3 text-4xl font-bold text-hope">80~90% 이상</div>,
      title: "평균 탕감률",
      description: "실제 의뢰인 평균 채무 탕감률\n합법적인 최대 탕감 실현",
    },
  ]

  const managementPoints = [
    "대한변협 인증 도산법 전문변호사 포함",
    "총 10명의 변호사와 50명의 법률 전문인력",
    "상담부터 인가·면책까지 전문변호사가 직접 사건 관리",
    "사건 수 제한 정책으로 의뢰인 사건에 집중",
    "한 명의 변호사가 모든 사건을 처리하는 일반 로펌과 차별화",
  ]

  const networkPoints = [
    "창원지방법원 바로 앞(사파동) 위치, 언제든 방문 상담 가능",
    "창원지방법·부산회생법원 보정 성향과 실무를 꿰뚫고 있는 지역 전문가 상주",
    "창원·부산·서울·대구 4개 거점 지역 법원별 맞춤 전략",
    "전국 어디서나 동일한 품질의 법률 서비스",
  ]

  const lawyerImages = ["/1.png", "/2.png", "/3.png", "/4.png"]

  const placeImages = ["/office-interior.jpg"]

  const [currentLawyerImage, setCurrentLawyerImage] = useState(0)
  const [currentPlaceImage, setCurrentPlaceImage] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentLawyerImage((prev) => (prev + 1) % lawyerImages.length)
    }, 5000)
  }

  useEffect(() => {
    resetAutoPlay()

    const placeInterval = setInterval(() => {
      setCurrentPlaceImage((prev) => (prev + 1) % placeImages.length)
    }, 5000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
      clearInterval(placeInterval)
    }
  }, [lawyerImages.length, placeImages.length])

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentLawyerImage((prev) => (prev + 1) % lawyerImages.length)
      resetAutoPlay()
    } else if (isRightSwipe) {
      setCurrentLawyerImage((prev) => (prev - 1 + lawyerImages.length) % lawyerImages.length)
      resetAutoPlay()
    }
  }

  const goToPrevious = () => {
    setCurrentLawyerImage((prev) => (prev - 1 + lawyerImages.length) % lawyerImages.length)
    resetAutoPlay()
  }

  const goToNext = () => {
    setCurrentLawyerImage((prev) => (prev + 1) % lawyerImages.length)
    resetAutoPlay()
  }

  const LawyerCarousel = ({ className = "" }: { className?: string }) => (
    <div className="relative">
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="이전 변호사"
      >
        <ChevronLeft className="h-6 w-6 text-trust" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="다음 변호사"
      >
        <ChevronRight className="h-6 w-6 text-trust" />
      </button>

      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-lg ${className}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {lawyerImages.map((image, index) => {
          const isActive = index === currentLawyerImage
          const isPrev = index === (currentLawyerImage - 1 + lawyerImages.length) % lawyerImages.length
          const isNext = index === (currentLawyerImage + 1) % lawyerImages.length

          return (
            <div
              key={image}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? "opacity-100 translate-x-0 scale-100"
                  : isPrev
                    ? "opacity-0 -translate-x-full scale-95"
                    : isNext
                      ? "opacity-0 translate-x-full scale-95"
                      : "opacity-0 translate-x-full scale-95"
              }`}
            >
              <div
                className="h-full w-full bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          )
        })}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {lawyerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentLawyerImage(index)
              resetAutoPlay()
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentLawyerImage ? "w-8 bg-trust" : "w-2 bg-trust/30"
            }`}
            aria-label={`변호사 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )

  const PlaceCarousel = ({ className = "" }: { className?: string }) => (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-muted ${className}`}>
      {placeImages.map((image, index) => {
        const isActive = index === currentPlaceImage
        const isPrev = index === (currentPlaceImage - 1 + placeImages.length) % placeImages.length

        return (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 translate-x-0"
                : isPrev
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        )
      })}
    </div>
  )

  return (
    <section id="credibility" className="bg-background py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mt-8 md:mt-12 mb-8 text-center">
            <span className="text-base font-semibold uppercase tracking-wider text-trust">CREDIBILITY</span>
          </div>

          <h2 className="mb-12 md:mb-24 text-center text-3xl font-bold text-foreground md:text-5xl">
            말이 아닌 <span className="text-trust">숫자</span>로 증명합니다
          </h2>
        </ScrollReveal>

        <div className="hidden md:grid mb-10 gap-6 md:gap-10 md:grid-cols-3">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-hope/10">
                  <stat.icon className="h-8 w-8 text-hope" />
                </div>
                {stat.component}
                <h3 className="mb-3 text-xl font-bold text-card-foreground">{stat.title}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="md:hidden mb-10 space-y-3">
          {stats.map((stat, index) => {
            const isOpen = openStatIndex === index
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenStatIndex(isOpen ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hope/10 flex-shrink-0">
                        <stat.icon className="h-6 w-6 text-hope" />
                      </div>
                      <div className="flex-1 text-center">
                        {stat.component}
                        <h3 className="text-lg font-bold text-card-foreground">{stat.title}</h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48" : "max-h-0"}`}>
                    <div className="px-6 pb-6 text-center">
                      <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="mb-10 rounded-2xl border border-border bg-card p-8 md:p-16 lg:p-20">
            <h3 className="mb-16 md:mb-20 text-center text-3xl font-bold text-card-foreground md:text-4xl">
              한 명의 변호사가 아닌,
              <br />
              <span className="text-trust">전문가 팀 전체</span>가 사건을 관리합니다
            </h3>

            <div className="space-y-10 md:space-y-20">
              <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-start">
                <LawyerCarousel />

                <div className="text-left">
                  <h4 className="mb-6 text-2xl md:text-3xl font-bold text-foreground text-left">
                    1. <span className="text-trust">도산법</span> 전문변호사 직접 관리
                  </h4>
                  <div className="space-y-3 text-lg md:text-lg text-muted-foreground leading-relaxed">
                    {managementPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-hope" />
                        <p className="text-left">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-start">
                <div className="order-2 md:order-1 text-left">
                  <h4 className="mb-6 text-2xl md:text-3xl font-bold text-foreground text-left">
                    2. <span className="text-trust">창원·경남 맞춤형</span> 전담팀 운영
                  </h4>
                  <div className="space-y-3 text-lg md:text-lg text-muted-foreground leading-relaxed">
                    {networkPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-hope" />
                        <p className="text-left">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <PlaceCarousel className="order-1 md:order-2" />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-lg px-4 text-center mt-16 md:mt-20">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full px-4 py-8 md:px-12 md:py-10 text-xl md:text-2xl font-bold text-white rounded-2xl shadow-lg cursor-pointer bg-[#9d5443] hover:bg-[#B85A30]"
            >
              전문변호사 직접 상담 신청하기
              <ArrowRight className="ml-2 h-6 w-6 inline-block" />
            </button>
          </div>
        </ScrollReveal>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
