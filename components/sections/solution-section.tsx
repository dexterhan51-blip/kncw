"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, TrendingDown, Building2, Check, Quote, ChevronDown } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"

export function SolutionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const solutions = [
    {
      icon: Shield,
      title: "즉시 보호",
      subtitle: "법원 사건 접수 후 5일 내 금지명령 결정 완료",
      description: "빚 독촉, 급여 압류를 법적으로 즉시 중단",
    },
    {
      icon: TrendingDown,
      title: "대폭 탕감",
      subtitle: "80~90% 이상 채무액 탕감",
      description: "변제 가능한 범위로 채무를 합리적으로 조정",
    },
    {
      icon: Building2,
      title: "창원지법·부산회생법원 맞춤전략",
      subtitle: "까다로운 창원지방법원과 부산회생법원의 보정명령과 심사 기준 완벽 대응",
      description: "파산관재인 변호사가 전담 관리",
    },
  ]

  return (
    <section id="solution" className="relative pt-16 md:pt-24 pb-16 px-4 md:pb-32 overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/kimand_solution.webp)" }}
      />
      {/* 흰색 투명 레이어 */}
      <div className="absolute inset-0 bg-white/85 dark:bg-black/70" />
      {/* 콘텐츠 */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-6 text-center">
              <span className="text-base font-semibold uppercase tracking-wider text-trust">SOLUTION</span>
            </div>

            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-5xl text-balance">
              더 이상 <span className="text-trust">혼자</span> 고민하지 마세요.
            </h2>

            <div className="mb-20 flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1 -mx-4 md:mx-0">
                <Image
                  src="/images/eb-8f-84-ec-82-b0-eb-9e-9c-eb-94-a9-eb-b3-80-ed-98-b8-ec-82-ac-20-ed-94-84-eb-a1-9c-ed-95-84-20-286-29.png"
                  alt="김민수 대표 변호사"
                  width={480}
                  height={640}
                  className="w-full md:w-auto h-auto object-contain"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left space-y-2 order-2 md:order-2">
                <p className="text-base md:text-lg font-semibold text-trust uppercase tracking-wide mb-2">
                  김민수 대표 변호사
                </p>
                <Quote className="mb-4 mx-auto md:mx-0 h-8 w-8 text-trust" />
                <p className="text-2xl md:text-3xl text-muted-foreground text-balance">
                  <span className="font-semibold text-hope">편안히 잠드는 밤</span>
                </p>
                <p className="text-2xl md:text-3xl text-muted-foreground text-balance">
                  <span className="font-semibold text-hope">월급날이 기다려지는 하루</span>
                </p>
                <p className="text-2xl md:text-3xl text-muted-foreground text-balance">
                  <span className="font-semibold text-hope">가족과 미래를 계획하는 내일</span>
                </p>
                <p className="mt-4 text-foreground text-2xl md:text-3xl">
                  김앤파트너스와 함께라면 <br className="block md:hidden" />
                  되찾을 수 있습니다.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mb-12 space-y-3 md:grid md:gap-10 md:grid-cols-3 md:space-y-0 md:items-stretch">
            {solutions.map((solution, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                {/* Mobile: Accordion style */}
                <div className="md:hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1c4e6f]/10 flex-shrink-0">
                        <solution.icon className="h-6 w-6 text-[#1c4e6f]" />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground text-left">{solution.title}</h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pt-4 pb-5 space-y-3">
                      <p className="text-lg font-semibold" style={{ color: "#1c4e6f" }}>
                        {solution.subtitle}
                      </p>
                      <p className="text-base leading-relaxed text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop: Card style (unchanged) */}
                <div className="hidden md:flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1c4e6f]/10">
                    <solution.icon className="h-8 w-8 text-[#1c4e6f]" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-card-foreground">{solution.title}</h3>
                  <p className="mb-3 text-xl md:text-xl font-semibold" style={{ color: "#1c4e6f" }}>
                    {solution.subtitle}
                  </p>
                  <p className="text-lg md:text-lg leading-relaxed text-muted-foreground">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mb-16 flex flex-col md:flex-row flex-wrap justify-center gap-4 text-center text-lg md:text-lg text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Check className="h-5 w-5 text-trust flex-shrink-0" />
                <span>가족·직장에 비밀 유지 가능</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-5 w-5 text-trust flex-shrink-0" />
                <span>비대면 진행 지원</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-5 w-5 text-trust flex-shrink-0" />
                <span>수임료 최대 4+1회 분할 납부 지원</span>
              </div>
            </div>

            <div className="mx-auto max-w-lg px-4 text-center">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-4 py-8 md:px-12 md:py-10 text-xl md:text-2xl font-bold text-white rounded-2xl shadow-lg cursor-pointer bg-[#9d5443] hover:bg-[#B85A30]"
              >
                전문가와 함께 해결 시작하기
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
