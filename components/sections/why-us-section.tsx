"use client"

import { Shield, CreditCard, MessageSquare, CheckCircle, ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"

export function WhyUsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const principles = [
    {
      icon: Shield,
      title: "원칙 1",
      subtitle: "불가능한 사건은 수임하지 않습니다",
      description: '"무조건 된다"는 거짓말 대신,\n정직한 진단과 현실적인 조언을 드립니다.',
    },
    {
      icon: CreditCard,
      title: "원칙 2",
      subtitle: "수임료를 위해 대출을 권유하지 않습니다",
      description: "이미 빚으로 고통받는 분께\n또 다른 빚을 지우지 않습니다.",
    },
    {
      icon: MessageSquare,
      title: "원칙 3",
      subtitle: "과장된 약속은 하지 않습니다",
      description: '"100% 승인", "3일 만에 해결" 같은\n무책임한 말은 하지 않습니다.',
    },
  ]

  const comparisons = [
    {
      label: "상담",
      past: "형식적 상담",
      kim: "도산법 전문변호사\n직접 상담",
    },
    {
      label: "수임 원칙",
      past: "무리한 사건도 일단 수임",
      kim: "불가능한 사건은\n정직하게 안내",
    },
    {
      label: "처리 방식",
      past: "1인 변호사 수십 건 동시 처리",
      kim: "전문가 팀 협업\n사건별 집중 관리",
    },
    {
      label: "성공률",
      past: "기각률 불확실",
      kim: "기각률 1% 이내\n(2025년 기준)",
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="why-us" className="bg-muted/30 py-14 px-4">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mt-8 md:mt-12 mb-8 text-center">
            <span className="text-base font-semibold uppercase tracking-wider text-trust">WHY US</span>
          </div>

          <h2 className="mb-12 md:mb-24 text-center text-3xl font-bold text-foreground md:text-5xl text-balance">
            왜 9,375명의 고객들은
            <br />
            <span className="text-trust">김앤파트너스</span>를 선택했을까요?
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <div className="overflow-hidden">
              <table className="w-full border-collapse rounded-xl border border-border bg-card shadow-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-4 text-left text-sm md:text-lg font-semibold text-card-foreground md:table-cell hidden">
                      항목
                    </th>
                    <th className="p-4 text-center text-base md:text-lg font-semibold text-muted-foreground">
                      과거 로펌 진행방식
                    </th>
                    <th className="p-4 text-center text-lg md:text-xl font-semibold text-[#1c4e6f]">
                      김앤파트너스 진행방식
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item) => (
                    <tr key={item.label} className="border-b border-border last:border-b-0">
                      <td className="p-4 font-medium text-sm md:text-lg text-card-foreground md:table-cell hidden">
                        {item.label}
                      </td>
                      <td className="p-4 text-center text-base md:text-lg text-muted-foreground">{item.past}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#1c4e6f]" />
                          <span className="text-base md:text-lg font-medium text-[#1c4e6f] whitespace-pre-line">
                            {item.kim}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Desktop view - 기존 카드 형태 */}
        <div className="mb-12 hidden md:grid gap-6 md:gap-8 md:grid-cols-3">
          {principles.map((principle, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-hope/10">
                  <principle.icon className="h-8 w-8 text-hope" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-hope">{principle.title}</h3>
                <p className="mb-3 text-xl font-semibold text-card-foreground">{principle.subtitle}</p>
                <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile view - 아코디언 형태 */}
        <div className="mb-12 md:hidden space-y-4">
          {principles.map((principle, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-hope/10">
                      <principle.icon className="h-6 w-6 text-hope" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-hope mb-1">{principle.title}</h3>
                      <p className="text-base font-semibold text-card-foreground">{principle.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 flex-shrink-0 text-hope transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="relative rounded-3xl border-2 border-trust/30 overflow-hidden py-16 md:py-20 px-8 md:px-12 text-center shadow-lg">
            {/* 배경 이미지 */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/kimand_whyus.webp)" }}
            />
            {/* 검은색 투명 레이어 */}
            <div className="absolute inset-0 bg-black/60" />
            {/* 콘텐츠 */}
            <div className="relative z-10">
              <h3 className="mb-6 text-3xl md:text-4xl font-bold text-white">원칙을 타협하지 않습니다.</h3>
              <p className="mb-6 text-xl md:text-2xl text-white/90">한 분 한 분의 인생을 다루는 일이기에</p>
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                빠른 수임보다 확실한 해결을,
                <br />
                많은 수임료보다 의뢰인의 경제적 재기를 먼저 생각합니다.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
