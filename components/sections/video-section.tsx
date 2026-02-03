"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">창원지방법원 vs 부산회생법원</h2>
            <p className="text-lg text-muted-foreground text-balance">
              법원의 성향을 알아야 &apos;기각&apos;을 피합니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg border">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/MgnDzbKU6WM"
                  title="창원지방법원 회생파산 실무 가이드"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">창원지방법원 회생파산 실무</h3>
                <p className="text-sm text-muted-foreground">
                  창원지방법원의 특징과 실무 처리 절차를 상세히 설명합니다
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg border">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/c9jOTcYzfT0"
                  title="부산회생법원 파산 절차 가이드"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">부산회생법원 회생파산 실무</h3>
                <p className="text-sm text-muted-foreground">
                  부산회생법원의 심사 기준과 보정명령 대응 방법을 안내합니다
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
