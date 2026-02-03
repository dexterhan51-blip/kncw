import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { VideoSection } from "@/components/sections/video-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { SuccessCasesSection } from "@/components/sections/success-cases-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { BrandStorySection } from "@/components/sections/brand-story-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <VideoSection />
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
