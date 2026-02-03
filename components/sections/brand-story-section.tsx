import { Target, Sparkles, BookOpen } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BrandStorySection() {
  return (
    <section id="brand-story" className="relative py-20 px-4 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/kimand_story.png)" }}
      />
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative z-10">
        <div className="mx-auto max-w-4xl space-y-8 md:space-y-12">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="text-base font-semibold uppercase tracking-wider text-trust">OUR STORY</span>
            </div>

            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-5xl text-balance">
              새로운 인생, 함께 시작하는 <span className="text-trust">최고의 파트너</span>
            </h2>
          </ScrollReveal>

          <div className="mb-8 space-y-8 md:space-y-12">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-white/45 p-8 md:p-12 shadow-sm text-left md:text-right">
                <div className="mb-8 flex items-center justify-start md:justify-end gap-3">
                  <BookOpen className="h-8 w-8 text-[#1c4e6f]" />
                  <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">Our Beginning</h3>
                </div>
                <div className="space-y-6 md:space-y-8 text-lg md:text-xl">
                  <p className="text-2xl md:text-3xl font-bold text-[#1c4e6f] leading-relaxed">
                    "김앤파트너스의 시작은 창원이었습니다."
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    2014년, 창원의 한 작은 법률사무소. <br className="hidden md:block" />빚 독촉에 시달리던 창원
                    ·경남시민들의 손을 잡으며 우리는 시작했습니다.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    그분들의 눈물을 닦아드리며 쌓은 노하우가 <br className="hidden md:block" />
                    부산, 대구, 서울로 뻗어나가는 밑거름이 되었습니다.
                  </p>
                  <p className="leading-relaxed text-card-foreground font-bold">
                    <br className="hidden md:block" />
                    가장 크고 확실한 해답은, 당신이 있는 이곳 <span className="text-[#1c4e6f]">창원·경남</span>에
                    있습니다.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="rounded-2xl border border-border bg-white/45 p-8 md:p-12 shadow-sm">
                <div className="mb-8 flex items-center gap-3">
                  <Target className="h-8 w-8 text-[#1c4e6f]" />
                  <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">Our Promise</h3>
                </div>
                <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-left">
                  <p className="leading-relaxed text-muted-foreground">
                    창원지방법원과 부산회생법원의 특수성과 실무 경향, <br className="hidden md:block" />
                    지난 10년간 창원에서 부딪히며 체득한 데이터로 증명합니다.
                  </p>
                  <p className="leading-relaxed text-card-foreground">
                    믿고 맡길 수 있는 법률 파트너로서 끝까지 함께하겠습니다.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    <span className="font-bold text-[#1c4e6f]">9,375건 이상</span>의 사건을 처리하며 쌓아온 노하우와{" "}
                    <br className="hidden md:block" />
                    <span className="font-bold text-[#1c4e6f]">1% 이내</span>의 기각률이 이를 증명합니다.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="rounded-2xl border border-[#1c4e6f]/20 bg-white/45 backdrop-blur-sm p-8 md:p-12 text-center shadow-lg">
                <Sparkles className="mx-auto mb-8 h-10 w-10 text-[#1c4e6f]" />
                <div className="space-y-8 md:space-y-10 text-center">
                  <p className="text-3xl font-bold text-foreground">
                    채무 문제는 끝이 아닙니다. <br className="hidden md:block" />
                    새로운 시작의 <span className="text-[#1c4e6f]">출발점</span>입니다.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                    김앤파트너스는 법률 절차를 마무리하는 것을 넘어 <br className="hidden md:block" />
                    의뢰인이 다시 일상으로 돌아가 자존감을 회복하고 <br className="hidden md:block" />
                    안정된 삶을 살아갈 수 있도록 함께합니다.
                  </p>
                
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
