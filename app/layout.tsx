import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import FloatingPhoneButton from "@/components/FloatingPhoneButton"
import KakaoTalkChatButton from "@/components/KakaoTalkChatButton"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kimnpartners-law.com'),
  title: "창원개인회생 창원개인파산 전문 | 법무법인 김앤파트너스",
  description:
    "창원개인회생, 창원개인파산 전문 법무법인. 창원지방법원 도보 1분, 9,375명 채무 해결. 80~90% 빚 탕감, 5일 내 독촉 중단, 1% 이내 기각률. 상담 예약 1577-1097",
  keywords: "창원개인회생, 창원개인파산, 창원회생, 창원파산, 경남개인회생, 경남개인파산, 개인회생, 개인파산, 채무조정, 빚탕감, 법무법인, 김앤파트너스",
  openGraph: {
    title: "창원개인회생 창원개인파산 전문 | 법무법인 김앤파트너스",
    description: "창원개인회생, 창원개인파산 전문 법무법인. 창원지방법원 도보 1분, 9,375명 채무 해결. 80~90% 빚 탕감, 상담 예약 1577-1097",
    type: "website",
    locale: "ko_KR",
    siteName: "법무법인 김앤파트너스",
    images: [
      {
        url: "/kimand_hero.webp",
        width: 1200,
        height: 630,
        alt: "창원개인회생 창원개인파산 전문 법무법인 김앤파트너스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "창원개인회생 창원개인파산 전문 | 법무법인 김앤파트너스",
    description: "창원개인회생, 창원개인파산 전문 법무법인. 9,375명 채무 해결, 80~90% 빚 탕감",
    images: ["/kimand_hero.webp"],
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
  icons: {
    icon: [
      {
        url: "/kimand_logo_light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/kimand_logo_dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/kimand_logo_light.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4A90B5" },
    { media: "(prefers-color-scheme: dark)", color: "#5AA8D0" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              if (!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "s_2e8ab5825826";
              if (!_nasa) var _nasa = {};
              if (window.wcs) {
                wcs.inflow();
                wcs_do();
              }
            `,
          }}
        />

        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ufs53r26nv");
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingPhoneButton />
        <KakaoTalkChatButton />
        <Analytics />

        <Script
          id="smartlog-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var hpt_info={'_account':'UHPT-36023', '_server': 'a30'};`,
          }}
        />
        <Script src="//cdn.smlog.co.kr/core/smart.js" strategy="afterInteractive" />

        <noscript>
          <img
            src="//a30.smlog.co.kr/smart_bda.php?_account=36023"
            style={{ display: "none", width: 0, height: 0 }}
            border={0}
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
