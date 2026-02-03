import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { SuccessCasesSection } from "@/components/sections/success-cases-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { BrandStorySection } from "@/components/sections/brand-story-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "창원개인회생 창원개인파산 전문 | 법무법인 김앤파트너스",
  description:
    "창원개인회생, 창원개인파산 전문 법무법인. 창원지방법원 도보 1분, 9,375명 채무 해결. 80~90% 빚 탕감, 무료상담 1577-1097",
  keywords:
    "창원개인회생, 창원개인파산, 창원회생, 창원파산, 경남개인회생, 경남개인파산, 창원채무조정, 창원빚탕감, 김앤파트너스",
  alternates: {
    canonical: "https://kimnpartners.co.kr/cw",
  },
  openGraph: {
    title: "창원개인회생 창원개인파산 전문 | 법무법인 김앤파트너스",
    description:
      "창원개인회생, 창원개인파산 전문 법무법인. 창원지방법원 도보 1분, 9,375명 채무 해결. 80~90% 빚 탕감, 무료상담 1577-1097",
    url: "https://kimnpartners.co.kr/cw",
    siteName: "법무법인 김앤파트너스",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://kimnpartners.co.kr/kimand_hero.png",
        width: 1200,
        height: 630,
        alt: "창원개인회생 창원개인파산 전문 법무법인 김앤파트너스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "창원개인회생 창원개인파산 전문 | 법무법인 김앤파트너스",
    description:
      "창원개인회생, 창원개인파산 전문 법무법인. 창원지방법원 도보 1분, 9,375명 채무 해결. 80~90% 빚 탕감",
    images: ["https://kimnpartners.co.kr/kimand_hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// JSON-LD 구조화 데이터
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kimnpartners.co.kr/cw",
      url: "https://kimnpartners.co.kr/cw",
      name: "창원개인회생 창원개인파산 전문 | 법무법인 김앤파트너스",
      description:
        "창원개인회생, 창원개인파산 전문 법무법인. 창원지방법원 도보 1분, 9,375명 채무 해결. 80~90% 빚 탕감",
      isPartOf: {
        "@id": "https://kimnpartners.co.kr/#website",
      },
      primaryImageOfPage: {
        "@id": "https://kimnpartners.co.kr/kimand_hero.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://kimnpartners.co.kr/#website",
      url: "https://kimnpartners.co.kr",
      name: "법무법인 김앤파트너스",
      description: "개인회생·파산 전문 법무법인",
      publisher: {
        "@id": "https://kimnpartners.co.kr/#organization",
      },
    },
    {
      "@type": "LegalService",
      "@id": "https://kimnpartners.co.kr/#organization",
      name: "법무법인 김앤파트너스",
      alternateName: "김앤파트너스",
      url: "https://kimnpartners.co.kr",
      logo: {
        "@type": "ImageObject",
        url: "https://kimnpartners.co.kr/img_logo_f.svg",
      },
      image: "https://kimnpartners.co.kr/kimand_hero.png",
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
        {
          "@type": "City",
          name: "창원",
        },
        {
          "@type": "State",
          name: "경상남도",
        },
      ],
      serviceType: ["개인회생", "개인파산", "채무조정", "면책"],
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
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: "https://kimnpartners.co.kr",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "창원개인회생 창원개인파산",
          item: "https://kimnpartners.co.kr/cw",
        },
      ],
    },
  ],
}

export default function CWLandingPage() {
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
