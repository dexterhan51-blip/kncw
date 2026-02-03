"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileText, Send, Scale, CheckCircle2, ArrowRight } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ProcessSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"rehabilitation" | "bankruptcy">("rehabilitation")

  const steps1to3 = [
    {
      icon: MessageSquare,
      number: "STEP 1",
      title: "상담 접수",
      items: ["온라인 또는 방문 상담", "현재 상황 파악 및 해결 방향 제시", "비대면 진행 가능"],
    },
    {
      icon: FileText,
      number: "STEP 2",
      title: "서류 준비",
      items: ["필요 서류 안내 및 발급 대행", "복잡한 서류를 쉽게 준비할 수 있도록 상세 안내", "서류 작성 전담 지원"],
    },
    {
      icon: Send,
      number: "STEP 3",
      title: "법원 신청",
      items: [
        "개인회생 법원 접수 후 5일 내 금지명령 결정 완료",
        "개인파산 법원 접수 후 채무자 대리인 절차 진행",
        "독촉·압류 즉시 중단",
      ],
    },
  ]

  const steps4to5 = [
    {
      icon: Scale,
      number: "STEP 4",
      title: "법원 심사",
      items: [
        "[개인회생] 법원 보정명령·권고 대응, 월 변제금 방어",
        "[개인파산] 파산관재인 조사 및 면담 대응, 환가요청 방어",
      ],
    },
    {
      icon: CheckCircle2,
      number: "STEP 5",
      title: "개시·인가·면책결정",
      items: [
        "[개인회생] 새로운 시작 → 월 변제금 법원 납부, 3~5년 변제 후 면책결정",
        "[개인파산] 파산관재인 조사절차, 채권자집회 참석 후 면책결정",
        "인가·면책결정 이후 추가상담 지원",
      ],
    },
  ]
  const allSteps = [...steps1to3, ...steps4to5]

  const scrollToStep = (stepIndex: number) => {
    const stepsScrollRef = document.querySelector("[data-steps-scroll]") as HTMLDivElement
    if (!stepsScrollRef) return
    const container = stepsScrollRef
    const cardWidth = container.clientWidth * 0.85 + 16
    container.scrollTo({ left: cardWidth * stepIndex, behavior: "smooth" })
  }

  const timelineData = {
    rehabilitation: [
      { step: "STEP 01", period: "5~7일", title: "금지명령", sub: "법원 사건 접수 후" },
      { step: "STEP 02", period: "6~8개월", title: "개시결정", sub: "변제시작일로부터" },
      { step: "STEP 03", period: "2~5개월", title: "인가결정", sub: "개시결정일로부터" },
    ],
    bankruptcy: [
      { step: "STEP 01", period: "5~7일", title: "중지명령", sub: "법원 사건 접수 후" },
      { step: "STEP 02", period: "10개월", title: "선고결정", sub: "신청일로부터" },
      { step: "STEP 03", period: "6개월", title: "면책결정", sub: "선고일로부터" },
    ],
  }

  const currentTimeline = timelineData[activeTab]

  return (
    <section id="process" className="bg-background py-16 px-4 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-6 text-center">
            <span className="text-base font-semibold uppercase tracking-wider text-trust">PROCESS</span>
          </div>

          <h2 className="mb-20 text-center text-3xl font-bold text-foreground md:text-5xl text-balance leading-tight">
            복잡한 개인회생·파산 절차,
            <br />
            김앤파트너스가 <span className="text-trust">처음부터 끝까지</span> 함께합니다.
          </h2>
        </ScrollReveal>

        <div className="relative mb-10 md:hidden">
          <div data-steps-scroll className="flex gap-4 overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory">
            {allSteps.map((step, index) => (
              <ScrollReveal key={`${step.number}-${index}`} delay={index * 120}>
                <div className="relative min-w-[85vw] md:min-w-0 md:w-auto flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg snap-center">
                  <button
                    type="button"
                    onClick={() => scrollToStep(index === allSteps.length - 1 ? 0 : index + 1)}
                    className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-trust/20 border-2 border-trust/30 hover:bg-trust/30 hover:border-trust/40 transition-all shadow-sm"
                    aria-label={index === allSteps.length - 1 ? "처음으로 돌아가기" : "다음 단계로 이동"}
                  >
                    <ArrowRight className="h-5 w-5 text-trust" />
                  </button>

                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1c4e6f]/10">
                    <step.icon className="h-8 w-8 text-[#1c4e6f]" />
                  </div>
                  <p className="mb-2 text-base font-semibold uppercase tracking-wider text-[#1c4e6f]">{step.number}</p>
                  <h3 className="mb-4 text-2xl font-bold text-card-foreground">{step.title}</h3>
                  <ul className="space-y-4">
                    {step.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground text-left"
                      >
                        <span className="mt-2 block h-2.5 w-2.5 rounded-full bg-[#1c4e6f] flex-shrink-0"></span>
                        <span className="text-left">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="hidden md:grid mb-12 gap-10 md:grid-cols-3">
          {steps1to3.map((step, index) => (
            <ScrollReveal key={`grid-top-${step.number}-${index}`} delay={index * 120}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-trust/10 border border-trust/20">
                  <ArrowRight className="h-5 w-5 text-trust" />
                </div>

                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1c4e6f]/10">
                  <step.icon className="h-8 w-8 text-[#1c4e6f]" />
                </div>
                <p className="mb-2 text-base font-semibold uppercase tracking-wider text-[#1c4e6f]">{step.number}</p>
                <h3 className="mb-4 text-2xl font-bold text-card-foreground">{step.title}</h3>
                <ul className="space-y-4">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground text-left"
                    >
                      <span className="mt-2 block h-2.5 w-2.5 rounded-full bg-[#1c4e6f] flex-shrink-0"></span>
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="hidden md:grid mb-12 gap-10 md:grid-cols-2">
          {steps4to5.map((step, index) => (
            <ScrollReveal key={`grid-bottom-${step.number}-${index}`} delay={index * 120}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-trust/10 border border-trust/20">
                  <ArrowRight className="h-5 w-5 text-trust" />
                </div>

                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1c4e6f]/10">
                  <step.icon className="h-8 w-8 text-[#1c4e6f]" />
                </div>
                <p className="mb-2 text-base font-semibold uppercase tracking-wider text-[#1c4e6f]">{step.number}</p>
                <h3 className="mb-4 text-2xl font-bold text-card-foreground">{step.title}</h3>
                <ul className="space-y-4">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground whitespace-pre-line text-left"
                    >
                      <span className="mt-2 block h-2.5 w-2.5 rounded-full bg-[#1c4e6f] flex-shrink-0"></span>
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mb-16 rounded-2xl border border-border bg-white p-6 md:p-8 shadow-sm">
            <h3 className="mb-6 text-center text-xl md:text-2xl font-bold text-gray-900">예상 소요 기간</h3>

            {/* Tab buttons */}
            <div className="flex p-1 mb-8 bg-gray-100 rounded-lg">
              <button
                onClick={() => setActiveTab("rehabilitation")}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                  activeTab === "rehabilitation" ? "bg-white text-trust shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                개인회생
              </button>
              <button
                onClick={() => setActiveTab("bankruptcy")}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                  activeTab === "bankruptcy" ? "bg-white text-trust shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                개인파산
              </button>
            </div>

            {/* Timeline visualization */}
            <div className="relative px-2">
              {/* Connection line */}
              <div className="absolute top-6 left-0 w-full px-8 md:px-12 h-full z-0 pointer-events-none">
                <div className="w-full h-1 bg-gray-100 rounded-full"></div>
              </div>

              {/* 3-step grid layout */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 relative z-10">
                {currentTimeline.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Circle indicator */}
                    <div
                      className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white shadow-sm mb-4 
                      ${index === 2 ? "bg-trust" : "bg-trust/70"}`}
                    >
                      <span className="text-white text-sm md:text-base font-bold">{index + 1}</span>
                    </div>

                    {/* Text content */}
                    <div className="text-center w-full">
                      {/* Step name moved to top */}
                      <p className="text-sm md:text-lg font-bold text-gray-800 mb-2 break-keep">{item.title}</p>

                      <p className="text-2xl md:text-3xl font-extrabold text-trust mb-2 leading-tight">{item.period}</p>

                      {/* Additional description */}
                      <p className="text-[11px] md:text-xs text-gray-500 mt-1 break-keep leading-tight">({item.sub})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-[11px] text-gray-400">
                * 법원 사정 및 보정 명령 여부에 따라 기간은 달라질 수 있습니다.
              </p>
            </div>
          </div>

          <p className="mb-10 text-center text-lg text-muted-foreground leading-relaxed px-4">
            번거로운 서류 작업과 복잡한 법률 절차는 김앤파트너스의 전문 영역으로 의뢰인의 시간과 부담을 최소화
            해드립니다.
          </p>

          <div className="mx-auto max-w-lg px-4 text-center">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full px-4 py-8 md:px-12 md:py-10 text-xl md:text-2xl font-bold text-white rounded-2xl shadow-lg cursor-pointer bg-[#9d5443] hover:bg-[#B85A30]"
            >
              새로운 시작, 지금 함께 만들어가기
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
