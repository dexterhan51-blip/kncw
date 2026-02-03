"use client"

import Image from "next/image"

const PHONE_NUMBER = "1577-1097"

export default function FloatingPhoneButton() {
  return (
    <div className="fixed bottom-22 right-4 z-[9999] md:bottom-24 md:right-6">
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="대표 전화로 연결"
        className="flex h-16 w-16 items-center justify-center rounded-full overflow-hidden shadow-[0_12px_20px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white p-0 bg-[#11ce1f]"
      >
        <Image
          src="/phone-icon.png"
          alt="전화"
          width={64}
          height={64}
          className="h-[51px] w-[51px] object-contain"
          aria-hidden
        />
      </a>
    </div>
  )
}
