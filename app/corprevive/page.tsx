import { CorpHeroSection } from "@/components/sections/corp-hero-section"
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
