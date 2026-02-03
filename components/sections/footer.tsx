"use client"

import { Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <img src="/img_logo_f.svg" alt="창원개인회생 창원개인파산 전문 법무법인 김앤파트너스" className="mb-4 h-10 w-auto" />
        </div>
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-2 font-semibold text-card-foreground">창원사무소</h4>
            <p className="text-sm text-muted-foreground">
              경남 창원시 의창구 사파동 689번길 4-4
              <br />
              가야빌딩 4층
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-card-foreground">부산사무소</h4>
            <p className="text-sm text-muted-foreground">
              부산 연제구 법원로 34
              <br />
              정림빌딩 11층
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-card-foreground">서울사무소</h4>
            <p className="text-sm text-muted-foreground">
              서울특별시 서초구 서초대로 330
              <br />
              영일빌딩 4층
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-card-foreground">대구사무소</h4>
            <p className="text-sm text-muted-foreground">
              대구 수성구 동대구로 353
              <br />
              범어353타워 7층
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 font-semibold text-card-foreground">대표번호</p>
            <p className="text-2xl font-bold text-[#1c4e6f]">1577-1097</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.youtube.com/@%EA%B0%9C%EC%9D%B8%ED%9A%8C%EC%83%9D%EB%B3%80%ED%98%B8%EC%82%AC"
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-[#1c4e6f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#163d55]"
            >
              <Youtube className="h-5 w-5" />
              기사회생TV
            </Link>
            <Link
              href="https://revival.kimnpartners.co.kr/"
              target="_blank"
              className="rounded-lg bg-[#1c4e6f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#163d55]"
            >
              공식 홈페이지
            </Link>
            <Link
              href="https://blog.kimnpartners.co.kr/"
              target="_blank"
              className="rounded-lg bg-[#1c4e6f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#163d55]"
            >
              공식 블로그
            </Link>
            <Link
              href="https://cafe.naver.com/knprevival"
              target="_blank"
              className="rounded-lg bg-[#1c4e6f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#163d55]"
            >
              공식 카페
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="space-y-2 text-sm text-muted-foreground mb-4">
            <p>사업자등록번호 | 197-88-01242</p>
            <p>대표자 | 김민수</p>
            <p>광고책임변호사 | 김민수</p>
          </div>
          <div className="mb-4 flex flex-wrap gap-4 text-sm">
            <Link href="#" className="text-card-foreground hover:text-trust">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-trust">
              이용약관
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">Copyright © 2025 법무법인 김앤파트너스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
