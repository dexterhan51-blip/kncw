import { ScrollReveal } from "@/components/scroll-reveal"

export function ProblemSection() {
  const problems = [
    {
      firstLine: "모르는 번호만 떠도 심장이 두근거리고,",
      secondLine: "추심 전화 올까 봐 스마트폰을 꺼놓고 삽니다",
    },
    {
      firstLine: "2억 빚에 이자만 월 300만 원...",
      secondLine: "원금은 꿈도 못 꾸고 이자만 내다 인생 끝나는 건가요",
    },
    {
      firstLine: "다음 달 월급도 압류될 것 같은데...",
      secondLine: "가족한테는 절대 들키면 안 되는데 어떡하죠",
    },
    {
      firstLine: "창원지방법원은 심사가 유독 깐깐하고 보정 명령도 많다던데",
      secondLine: "잘못 신청했다가 기각되면 영영 기회가 없는 건가요?",
    },
  ]

  return (
    <section id="problem" className="relative py-16 px-4 md:py-32 pb-32 md:pb-48 bg-[#1C4E6F]">
      {/* 상단 어두운 영역 - 세 번째 고민까지 */}
      <div className="absolute inset-x-0 top-0 bottom-32 md:bottom-40 bg-[#1C4E6F]" />
      {/* 하단 그라데이션 영역 - 네 번째 고민부터 밝아지기 시작 */}
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-b from-[#1C4E6F] via-[#1C4E6F] via-[#1C4E6F] via-[#2f6485] to-white" />
      {/* 콘텐츠 */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-6 flex items-center justify-center">
              <span className="text-base font-semibold uppercase tracking-wider text-trust">PROBLEM</span>
            </div>

            <h2 className="mb-24 text-center text-3xl font-bold text-white md:text-5xl text-balance">
              이런 고민, 혼자 안고 계신가요?
            </h2>
          </ScrollReveal>

          <div className="space-y-10">
            {problems.map((problem, index) => {
              const isEven = index % 2 === 0
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className={`flex ${isEven ? "justify-start" : "justify-end"}`}>
                    <div className="relative w-auto max-w-[90%] md:max-w-fit rounded-2xl bg-white p-6 shadow-lg">
                      {/* 말풍선 꼬리 */}
                      <div className={`absolute top-0 top-6 ${isEven ? "-left-3" : "-right-3"}`}>
                        <div
                          className={`h-0 w-0 border-t-[12px] border-b-[12px] border-t-transparent border-b-transparent ${
                            isEven ? "border-r-[12px] border-r-white" : "border-l-[12px] border-l-white"
                          }`}
                        />
                      </div>
                      <div className="leading-relaxed text-slate-900 text-left">
                        <p className="text-xl md:text-2xl font-semibold mb-1">{problem.firstLine}</p>
                        <p className="text-lg md:text-xl text-slate-700">{problem.secondLine}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
