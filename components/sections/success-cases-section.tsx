"use client"

import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"
import { VideoCarousel } from "@/components/video-carousel"

export function SuccessCasesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const [hoveredCards, setHoveredCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
    setHoveredCards((prev) => {
      const newSet = new Set(prev)
      newSet.delete(index)
      return newSet
    })
  }

  const handleMouseEnter = (index: number) => {
    setHoveredCards((prev) => new Set(prev).add(index))
  }

  const handleMouseLeave = (index: number) => {
    setHoveredCards((prev) => {
      const newSet = new Set(prev)
      newSet.delete(index)
      return newSet
    })
  }

  const formatReliefAmount = (amount: number): string => {
    return `약 ${amount.toLocaleString()}원`
  }

  const cases = [
    {
      title: "생활비 병원비",
      situation: "40대 남성 M씨 약 2억 1천만 원 / 부양가족 2인",
      result: "개시결정, 36개월 변제",
      court: "부산회생법원",
      reduction: "2억 1,808만 원 → 1,233만 원 (약 94% 탕감)",
      testimony:
        "저는 배우자가 우울증 등으로 근로를 전혀 할 수 없는 상황에서 중증 자폐 진단을 받은 자녀를 홀로 부양하고 있었습니다. 생활비와 병원비 부담이 커지면서 2억 원이 넘는 채무가 발생했고, (중략)결국 94% 가까운 탕감과 낮은 변제금으로 인가를 받을 수 있었습니다. 잃어버린 삶을 다시 시작할 기회를 주셔서 진심으로 감사드립니다..",
      totalDebt: 218085753,
      reliefAmount: 175037736,
      totalRepayment: 12336794,
      monthlyRepayment: 342676,
      repaymentMonths: 36,
      reliefRate: 93.42,
      type: "rehabilitation",
    },
    {
      title: "주식·코인 채무",
      situation: "40대 남성 P씨 약 1억 1천만 원 / 미성년 자녀 3명 양육",
      result: "개시결정, 36개월 변제",
      court: "부산회생법원",
      reduction: "1억 1,126만 원 → 1,687만 원 (약 84% 탕감)",
      testimony:
        "사업 실패 이후 생활비를 충당하려다 비트코인과 주식투자가 잘못되면서 1억 원이 넘는 채무가 생겼습니다. (중략) 월 46만 원대의 변제금과 36개월 변제라는 가장 유리한 조건으로 인가를 받을 수 있었습니다. 불안했던 일상에서 다시 일어설 수 있도록 도와주신 점 깊이 감사드립니다.",
      totalDebt: 111261556,
      reliefAmount: 89862667,
      totalRepayment: 17687664,
      monthlyRepayment: 468824,
      repaymentMonths: 36,
      reliefRate: 84.19,
      type: "rehabilitation",
    },
    {
      title: "임대인 파산",
      situation: "30대 후반 남성 C씨 약 10억 원",
      result: "파산선고 및 면책결정",
      court: "창원지방법원",
      reduction: "채무 전액 면책",
      testimony:
        "저는 공인중개사 자격증을 가지고 있었는데, 삼촌이 제 허락 없이 제 명의로 빌라를 매매하고 임차보증금을 개인적으로 사용한 뒤 잠적했습니다. 약 10억 원이 넘는 반환채무가 모두 제게 넘어왔지만, (중략) 주소가 모두 변경된 23명의 개인채권자에 대해서는 법원의 주소보정명령을 받아 5개월 동안 하나하나 정리해 주신 덕분에 면책 결정을 받을 수 있었습니다. 도와주셔서 진심으로 감사드립니다.",
      totalDebt: 4096712045,
      dischargedAmount: 4096712045,
      depositOrder: "총채무 약 10억 488만 원 전액 면책",
      type: "bankruptcy",
    },
    {
      title: "사업실패",
      situation: "50대 여성 P씨 약 1억 8천만 원",
      result: "개시결정, 48개월 변제",
      court: "부산회생법원",
      reduction: "1억 8,594만 원 → 2,192만 원 (약 88% 탕감)",
      testimony:
        "배우자의 사업 실패로 생활비 지원을 전혀 받을 수 없는 상황에서 저는 생계를 유지하기 위해 작은 족욕샵을 창업했습니다. 하지만 곧 코로나19로 직격탄을 맞아 운영이 어려워졌고,(중략) 결국 48개월 변제와 88%에 가까운 탕감이라는 최선의 결과를 받아 새로운 시작을 할 수 있게 되었습니다.",
      totalDebt: 185945285,
      reliefAmount: 155379394,
      totalRepayment: 21923064,
      monthlyRepayment: 456784,
      repaymentMonths: 48,
      reliefRate: 87.63,
      type: "rehabilitation",
    },
    {
      title: "식당 운영비",
      situation: "30대 후반 남성 K씨 약 2억 2천만 원",
      result: "보정 없이 36개월 변제",
      court: "부산회생법원",
      reduction: "2억 2,406만 원 → 2,511만 원 (약 86% 탕감)",
      testimony:
        "과거 누나와 함께 운영하던 식당이 잘되지 않으면서 채무가 크게 불어났고(중략)고모가 제 명의로 식당을 운영하며 제 계좌를 사용한 문제도 실질적 관련이 없음을 입증해 해결해 주셨습니다. 그 결과, 86%가 넘는 탕감과 36개월 변제라는 최적의 조건으로 인가를 받을 수 있었습니다.",
      totalDebt: 224069371,
      reliefAmount: 159646064,
      totalRepayment: 25113960,
      monthlyRepayment: 697600,
      repaymentMonths: 36,
      reliefRate: 86.41,
      type: "rehabilitation",
    },
    {
      title: "카드 돌려막기",
      situation: "40대 남성 J씨 약 3억 4천만 원 / 3번째 신청",
      result: "개시결정, 36개월 변제",
      court: "부산회생법원",
      reduction: "3억 4,995만 원 → 2,208만 원 (약 82% 탕감)",
      testimony:
        "생활비와 돌려막기로 발생한 채무 때문에 과거 두 차례 개인회생을 신청했지만, 모두 면책에 이르지 못해 폐지되었습니다.(중략) 변호사님은 채권자 목록만으로도 집행권원이 존재한다는 점을 설득력 있게 소명해 목록에서 제외되지 않도록 조치해 주셨습니다. 그 결과 80%가 넘는 탕감과 36개월 변제라는 최선의 인가 결정을 받을 수 있었습니다.",
      totalDebt: 349956728,
      reliefAmount: 99338125,
      totalRepayment: 22089852,
      monthlyRepayment: 613595,
      repaymentMonths: 36,
      reliefRate: 81.81,
      type: "rehabilitation",
    },
  ]

  return (
    <section id="success-cases" className="bg-background py-20 px-4 md:py-40">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="text-base font-semibold uppercase tracking-wider text-trust">SUCCESS CASES</span>
          </div>

          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-5xl text-balance">
            김앤파트너스와 함께한 의뢰인들은
            <br />
            이미 <span className="text-trust">새로운 삶</span>을 시작했습니다.
          </h2>
          <p className="mb-10 text-center text-lg md:text-xl text-muted-foreground">
            카드를 눌러보세요.
            <br />
            생생한 후기를 확인하실 수 있습니다.
          </p>
        </ScrollReveal>

        <div className="mb-12 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className={`group relative h-[400px] cursor-pointer ${index >= 4 ? "hidden md:block" : ""}`}
                style={{ perspective: "1000px" }}
                onClick={() => toggleCard(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className="relative h-full w-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCards.has(index) || hoveredCards.has(index) ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* 카드 앞면 */}
                  <div
                    className="absolute inset-0 flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* 탕감률 - 오른쪽 위 */}
                    {caseItem.type === "bankruptcy" ? (
                      <div className="absolute right-4 top-4">
                        <div className="rounded-lg bg-[#9d5443] px-4 py-2">
                          <span className="text-base font-bold text-white whitespace-nowrap">채무 전액 면책</span>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute right-4 top-4">
                        <div className="rounded-lg bg-[#9d5443] px-4 py-2">
                          <span className="text-lg font-bold text-white">
                            탕감률 {caseItem.reliefRate?.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    )}

                    {/* 제목 */}
                    <h3 className="mb-4 pr-20 text-xl font-bold text-left text-foreground">{caseItem.title}</h3>

                    {/* 상황 및 결과 */}
                    <div className="mb-4 space-y-2 text-left mt-1">
                      <p className="text-lg md:text-lg font-medium text-trust">{caseItem.situation}</p>
                      <p className="text-lg md:text-lg font-semibold" style={{ color: "#1c4e6f" }}>
                        {caseItem.result}
                      </p>
                      <p className="text-sm text-muted-foreground">{caseItem.court}</p>
                    </div>

                    {/* 금액 정보 */}
                    {caseItem.type === "bankruptcy" ? (
                      <div className="mt-auto space-y-3 text-left">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-muted-foreground">예납명령</p>
                          <p className="text-sm font-medium text-foreground">{caseItem.depositOrder}</p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-muted-foreground">총 채무</p>
                          <p className="text-lg font-bold text-foreground">{caseItem.totalDebt.toLocaleString()}원</p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-muted-foreground">면책채무액</p>
                          <p className="text-lg font-bold text-trust">
                            {caseItem.dischargedAmount?.toLocaleString()}원
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-auto space-y-3 text-left">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-muted-foreground">총 채무</p>
                          <p className="text-lg font-bold text-foreground">{caseItem.totalDebt.toLocaleString()}원</p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-muted-foreground">총 변제금</p>
                          <p className="text-lg font-bold text-foreground">
                            {caseItem.totalRepayment?.toLocaleString()}원
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-muted-foreground">월 변제금</p>
                          <p className="text-lg font-bold text-foreground">
                            {caseItem.monthlyRepayment?.toLocaleString()}원 / {caseItem.repaymentMonths}개월
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-muted-foreground">탕감액</p>
                          <p className="text-lg font-bold text-trust">{formatReliefAmount(caseItem.reliefAmount!)}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 카드 뒷면 - Testimony */}
                  <div
                    className="absolute inset-0 flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="flex h-full flex-col justify-center text-center px-4">
                      <Quote className="mb-4 mx-auto h-8 w-8 text-trust" />
                      <p className="text-lg leading-relaxed text-card-foreground text-left md:text-center">
                        {caseItem.testimony}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mb-16 rounded-3xl bg-gradient-to-br from-hope/10 via-hope/5 to-trust/10 py-12 px-4 md:py-24 md:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center px-2 md:px-0">
                <h3 className="mb-8 text-3xl md:text-4xl font-bold text-foreground text-balance text-center">
                  절망했던 분들이 <span className="text-trust">희망</span>을 찾았고,
                  <br />
                  숨죽이며 살던 분들이 <span className="text-trust">다시 웃기</span> 시작했습니다.
                </h3>
                <p className="mb-10 mt-4 text-xl md:text-2xl text-muted-foreground text-balance text-center">
                  특별한 비법은 없습니다. <br className="hidden md:block" />
                  단지, 혼자 고민하지 않았을 뿐입니다.
                </p>
              </div>

              <div className="mx-auto max-w-lg px-4 text-center">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-4 py-8 md:px-12 md:py-10 text-xl md:text-2xl font-bold text-white rounded-2xl shadow-lg cursor-pointer bg-[#9d5443] hover:bg-[#B85A30]"
                >
                  내 경우도 가능한지 상담받기
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-24 text-center">
            <h3 className="mb-16 md:mb-20 text-3xl md:text-4xl font-bold text-foreground text-center">
              김민수 대표 변호사의 &apos;<span className="text-hope">기사회생TV</span>&apos;에서{" "}
              <br className="hidden md:block" />
              실제 사례와 솔직한 조언을 확인해 보세요.
            </h3>
            <VideoCarousel />
          </div>
        </ScrollReveal>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
