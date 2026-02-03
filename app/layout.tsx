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
  title: "법무법인 김앤파트너스 | 개인회생·파산 전문",
  description:
    "무거운 빚에서 벗어나세요. 9,375명이 선택한 개인회생·파산 전문 법무법인. 80~90% 채무 탕감, 5일 내 독촉 중단, 1% 이내 기각률",
  keywords: "개인회생, 개인파산, 채무조정, 빚탕감, 법무법인, 김앤파트너스, 변호사상담",
  openGraph: {
    title: "법무법인 김앤파트너스 | 개인회생·파산 전문",
    description: "무거운 빚에서 벗어나세요. 9,375명이 선택한 개인회생·파산 전문 법무법인",
    type: "website",
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
