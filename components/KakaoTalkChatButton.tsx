"use client"

import Link from "next/link"
import Image from "next/image"

const KAKAO_CHAT_URL = "https://pf.kakao.com/_uxmxgsK/chat?entry=new"

export default function KakaoTalkChatButton() {
  return (
    <div className="fixed bottom-4 right-4 z-[9999] md:bottom-6 md:right-6">
      <Link
        href={KAKAO_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 오픈채팅으로 이동"
        className="relative flex h-16 w-16 items-center justify-center rounded-full overflow-hidden bg-[#FEE500] shadow-[0_12px_20px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c4e6f] p-0"
      >
        <Image
          src="/kakao-logo.png"
          alt="카카오톡 채널"
          width={80}
          height={80}
          className="h-20 w-20 object-cover scale-110"
          aria-hidden="true"
          priority
        />
      </Link>
    </div>
  )
}
