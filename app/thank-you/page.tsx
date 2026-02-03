"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

export default function ThankYouPage() {
  useEffect(() => {
    const naverScript = document.createElement("script")
    naverScript.type = "text/javascript"
    naverScript.src = "//wcs.naver.net/wcslog.js"
    naverScript.async = true

    naverScript.onload = () => {
      const initConversion = () => {
        const win = window as any
        if (win.wcs && typeof win.wcs.trans === "function") {
          if (!win.wcs_add) win.wcs_add = {}
          win.wcs_add["wa"] = "s_2e8ab5825826"
          const _conv: any = {}
          _conv.type = "lead"
          win.wcs.trans(_conv)
        } else {
          setTimeout(initConversion, 100)
        }
      }
      initConversion()
    }

    document.head.appendChild(naverScript)

    // Smartlog conversion
    const win = window as any
    if (!win.hpt_trace_info) {
      win.hpt_trace_info = { _mode: "q", _memid: "" }
    }

    return () => {
      // Cleanup
      if (naverScript.parentNode) {
        naverScript.parentNode.removeChild(naverScript)
      }
    }
  }, [])

  const handleKakaoChat = () => {
    window.open("https://pf.kakao.com/_uxmxgsK/chat?entry=new", "_blank")
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out 0.3s forwards;
        }
      `,
        }}
      />

      <div className="min-h-screen bg-[#faf8f5] flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm py-5 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Link href="/" className="text-2xl font-bold text-[#1a365d] font-serif">
              김앤파트너스<span className="text-[#c9a227]">.</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-16 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03] bg-[#1a365d] -top-48 -right-24"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bg-[#1a365d] -bottom-24 -left-24"></div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl max-w-[580px] w-full p-12 md:p-16 text-center relative z-10 opacity-0 animate-fade-in">
            {/* Check Icon */}
            <div className="w-24 h-24 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1a365d] to-[#2c5282] flex items-center justify-center scale-0 animate-scale-in">
                <Check className="w-12 h-12 text-white stroke-[3]" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-2 border-[#1a365d] animate-ping opacity-0"
                style={{ animationDelay: "800ms", animationDuration: "1.5s", animationIterationCount: "1" }}
              ></div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">문의가 접수되었습니다</h1>
            <p className="text-lg text-[#4a5568] mb-10 leading-relaxed">
              소중한 문의 감사드립니다.
              <br />
              담당 전문가가 확인 후 빠르게 연락드리겠습니다.
            </p>

            {/* Quote */}
            <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f0e8] rounded-2xl p-8 mb-10 relative">
              <span className="absolute top-2 left-5 text-7xl font-serif text-[#c9a227] opacity-30 leading-none">
                "
              </span>
              <p className="font-serif text-2xl text-[#1a365d] font-medium leading-relaxed relative z-10">
                당신의 짐,
                <br />
                함께 짊어지겠습니다.
              </p>
              <p className="text-[#718096] mt-4 text-sm font-medium">— 법무법인 김앤파트너스</p>
            </div>

            {/* Info Box */}
            <div className="bg-[#faf8f5] rounded-xl p-6 mb-9 text-left">
              <h3 className="text-sm font-bold text-[#1a365d] mb-3 flex items-center gap-2">
                <svg
                  className="w-[18px] h-[18px] text-[#c9a227]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8h.01" />
                </svg>
                상담 안내
              </h3>
              <ul className="space-y-2">
                <li className="text-[15px] text-[#4a5568] flex items-start gap-3 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-2 flex-shrink-0"></span>
                  <span>영업일 기준 24시간 내 연락드립니다</span>
                </li>
                <li className="text-[15px] text-[#4a5568] flex items-start gap-3 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-2 flex-shrink-0"></span>
                  <span>전화 상담이 어려우신 경우 카카오톡 상담도 가능합니다</span>
                </li>
                <li className="text-[15px] text-[#4a5568] flex items-start gap-3 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-2 flex-shrink-0"></span>
                  <span>모든 상담 내용은 철저히 비밀이 보장됩니다</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleKakaoChat}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-[#FEE500] text-[#3C1E1E] shadow-lg hover:bg-[#F5DC00] hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.652 1.768 4.983 4.428 6.312-.144.522-.925 3.36-.962 3.592 0 0-.019.158.084.218.103.06.224.013.224.013.296-.04 3.432-2.244 3.973-2.627.739.103 1.506.157 2.253.157 5.523 0 10-3.463 10-7.691S17.523 3 12 3z" />
                </svg>
                카카오톡 상담하기
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                홈으로 돌아가기
              </Link>
            </div>

            {/* YouTube Link */}
            <div className="mt-8 pt-8 border-t border-[#1a365d]/10">
              <p className="text-sm text-[#718096] mb-3">개인회생·파산에 대해 더 알고 싶으시다면?</p>
              <a
                href="https://www.youtube.com/@%EA%B0%9C%EC%9D%B8%ED%9A%8C%EC%83%9D%EB%B3%80%ED%98%B8%EC%82%AC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg text-[15px] font-semibold hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                기사회생TV 보러가기
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#1a365d] text-white py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-serif text-xl font-bold mb-6 text-center">전국 사무실 안내</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { name: "서울사무실", link: "https://naver.me/GhSvLK1J" },
                { name: "대구사무실", link: "https://naver.me/GUmXmts4" },
                { name: "창원사무실", link: "https://naver.me/F2nRNlCp" },
                { name: "부산사무실", link: "https://naver.me/xt49b9KV" },
              ].map((office) => (
                <div
                  key={office.name}
                  className="bg-white/10 rounded-xl p-5 text-center hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="text-base font-bold mb-3 text-[#d4b44a]">{office.name}</h4>
                  <a
                    href={office.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    위치 보기
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-9 pt-6 border-t border-white/15 text-[13px] text-white/60">
              © 2025 법무법인 김앤파트너스. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
