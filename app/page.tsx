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

// JSON-LD 구조화 데이터
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kimnpartners-law.com/",
      url: "https://kimnpartners-law.com/",
      name: "창원개인회생 창원개인파산 전문 | 법무법인 김앤파트너스",
      description: "창원개인회생, 창원개인파산 전문 법무법인. 창원지방법원 도보 1분, 9,375명 채무 해결. 80~90% 빚 탕감",
      isPartOf: {
        "@id": "https://kimnpartners-law.com/#website",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://kimnpartners-law.com/#website",
      url: "https://kimnpartners-law.com",
      name: "법무법인 김앤파트너스",
      description: "창원개인회생·창원개인파산 전문 법무법인",
      publisher: {
        "@id": "https://kimnpartners-law.com/#organization",
      },
    },
    {
      "@type": "LegalService",
      "@id": "https://kimnpartners-law.com/#organization",
      name: "법무법인 김앤파트너스",
      alternateName: "김앤파트너스",
      url: "https://kimnpartners-law.com",
      logo: {
        "@type": "ImageObject",
        url: "https://kimnpartners-law.com/img_logo_f.svg",
      },
      image: "https://kimnpartners-law.com/kimand_hero.webp",
      description: "창원개인회생, 창원개인파산, 경남 개인회생·파산 전문 법무법인",
      telephone: "1577-1097",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "경남 창원시 의창구 사파동 689번길 4-4 가야빌딩 4층",
        addressLocality: "창원시",
        addressRegion: "경상남도",
        postalCode: "51168",
        addressCountry: "KR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.2285,
        longitude: 128.6811,
      },
      areaServed: [
        { "@type": "City", name: "창원" },
        { "@type": "State", name: "경상남도" },
      ],
      serviceType: ["창원개인회생", "창원개인파산", "개인회생", "개인파산", "채무조정", "면책"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "9375",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "창원개인회생과 창원개인파산의 차이가 뭔가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "개인회생은 일정 소득이 있는 분이 3~5년간 변제 계획을 이행한 후 나머지 채무를 면책받는 제도입니다. 개인파산은 소득이 없거나 변제 능력이 없는 분이 법원의 면책 결정으로 즉시 채무를 소멸시키는 제도입니다.",
          },
        },
        {
          "@type": "Question",
          name: "창원개인회생 비용은 얼마나 드나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "사건의 복잡도와 채무액에 따라 다르지만, 기본 수임료는 상담 시 투명하게 안내드립니다. 김앤파트너스는 최대 4+1회 분할 납부를 지원하며, 불필요한 대출을 권유하지 않습니다.",
          },
        },
        {
          "@type": "Question",
          name: "창원개인회생 신청하면 가족이나 직장에 알려지나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "아닙니다. 개인회생·파산은 본인의 신용정보에만 기록되며, 가족이나 직장에 별도로 통지되지 않습니다.",
          },
        },
        {
          "@type": "Question",
          name: "도박이나 투자 실패로 생긴 빚도 창원개인회생이 가능한가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "도박, 주식, 코인 등으로 인한 채무도 개인회생 신청이 가능합니다.",
          },
        },
      ],
    },
  ],
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  )
}
