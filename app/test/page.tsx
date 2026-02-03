"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { ProcessSection } from "@/components/sections/process-section"
import { SuccessCasesSection } from "@/components/sections/success-cases-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { FaqSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/sections/footer"
import FloatingPhoneButton from "@/components/FloatingPhoneButton"
import KakaoTalkChatButton from "@/components/KakaoTalkChatButton"

export default function TestPage() {
  return (
    <>
      <style jsx global>{`
        /* Main color overrides */
        .test-page [class*="bg-[#1c4e6f]"],
        .test-page [class*="bg-trust"],
        .test-page .bg-\\[\\#1c4e6f\\] {
          background-color: #1c4e6f !important;
        }
        
        /* CTA Button color overrides - changing orange to teal */
        .test-page [class*="bg-[#9d5443]"],
        .test-page .bg-\\[\\#9d5443\\],
        .test-page button[class*="bg-[#9d5443]"] {
          background-color: #86c5d2 !important;
        }
        
        .test-page [class*="hover:bg-[#B85A30]"]:hover,
        .test-page button:hover[class*="bg-[#9d5443]"] {
          background-color: #6fb0bf !important;
        }
        
        /* Background color overrides */
        .test-page [class*="bg-[#f5f7fa]"],
        .test-page [class*="bg-gray-50"],
        .test-page .bg-\\[\\#f5f7fa\\],
        .test-page section[class*="bg-"] {
          background-color: #c7d3dd !important;
        }
        
        /* Gradient overrides for hero section */
        .test-page [class*="from-[#1c4e6f]"],
        .test-page [class*="from-trust"] {
          --tw-gradient-from: #1c4e6f !important;
          --tw-gradient-to: rgb(28 78 111 / 0) !important;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        
        .test-page [class*="to-[#2d5f7f]"],
        .test-page [class*="to-trust"] {
          --tw-gradient-to: #153d5a !important;
        }
        
        /* Text color overrides */
        .test-page [class*="text-trust"],
        .test-page [class*="text-[#1c4e6f]"] {
          color: #1c4e6f !important;
        }
        
        /* Border color overrides */
        .test-page [class*="border-trust"],
        .test-page [class*="border-[#1c4e6f]"] {
          border-color: #1c4e6f !important;
        }
        
        /* Icon and badge color overrides */
        .test-page [class*="bg-[#9d5443]/10"] {
          background-color: rgba(134, 197, 210, 0.1) !important;
        }
        
        .test-page [class*="text-[#9d5443]"] {
          color: #86c5d2 !important;
        }
      `}</style>

      <main className="test-page min-h-screen">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <SuccessCasesSection />
        <WhyUsSection />
        <CredibilitySection />
        <FaqSection />
        <Footer />
        <FloatingPhoneButton />
        <KakaoTalkChatButton />
      </main>
    </>
  )
}
