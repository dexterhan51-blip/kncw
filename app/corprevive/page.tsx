import type { Metadata } from "next"
import { CorpHeroSection } from "@/components/sections/corp-hero-section"

export const metadata: Metadata = {
  title: "법인회생 전문 | 법무법인 김앤파트너스",
  description: "법인회생, 기업회생 전문 법무법인. 회사 부채 해결, 법인파산 방지. 9,375건 채무 해결 경험, 무료상담 1577-1097",
  keywords: "법인회생, 기업회생, 회사회생, 법인파산, 기업파산, 법무법인, 김앤파트너스",
  openGraph: {
    title: "법인회생 전문 | 법무법인 김앤파트너스",
    description: "법인회생, 기업회생 전문 법무법인. 회사 부채 해결, 법인파산 방지.",
    type: "website",
  },
}
import { CorpProblemSection } from "@/components/sections/corp-problem-section"
import { CorpSolutionSection } from "@/components/sections/corp-solution-section"
import { SuccessCasesSection } from "@/components/sections/success-cases-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { BrandStorySection } from "@/components/sections/brand-story-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"

export default function CorpRevivePage() {
  return (
    <main className="min-h-screen">
      <CorpHeroSection />
      <CorpProblemSection />
      <CorpSolutionSection />
      <SuccessCasesSection />
      <WhyUsSection />
      <CredibilitySection />
      <BrandStorySection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
