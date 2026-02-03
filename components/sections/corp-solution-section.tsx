"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ConsultationModal } from "@/components/consultation-modal"

export function CorpSolutionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const solutions = [
    {
      title: "법인 계좌 & 자금 방어",
      description:
        "은행에 알리는 순간 계좌는 동결됩니다. 빚 없는 은행으로 주거래 계좌를 변경하고 자금을 보호하는 법적 타이밍을 잡아드립니다.",
    },
    {
      title: "형사 리스크 사전 차단",
      description: "임금 체불, 횡령, 배임 등 대표님을 옥죄하는 형사 문제를 신청 전 단계에서 미리 진단하고 방어합니다.",
    },
    {
      title: "대표 개인 채무 원스톱 해결",
      description: "법인의 빚뿐만 아니라, 대표님의 연대보증과 개인 채무까지 통합 설계하여 '완전한 재기'를 돕습니다.",
    },
  ]

  return (
    <>
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c4e6f] mb-4">SOLUTION</h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              가장 빠르고 안전한 출구,
              <br />
              법원의 판단 기준을 아는 <span className="text-[#9d5443] font-bold">'관재인 출신'</span>이라 가능합니다.
            </p>
          </div>

          {/* 변호사 프로필 */}
          <div className="max-w-3xl mx-auto mb-16 p-8 bg-gradient-to-br from-[#1c4e6f] to-[#2d6a91] rounded-2xl shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">김민수 대표 변호사</h3>
            <div className="space-y-3 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-[#FFD700] text-2xl">✓</span>
                <p className="leading-relaxed">법인파산 관재인 역임 (법원의 심사 기준 완벽 파악)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFD700] text-2xl">✓</span>
                <p className="leading-relaxed">대한변호사협회 도산전문변호사</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFD700] text-2xl">✓</span>
                <p className="leading-relaxed">제52회 사법시험 합격 / 사법연수원 42기</p>
              </div>
            </div>
          </div>

          {/* 핵심 솔루션 3가지 */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#1c4e6f]">핵심 솔루션 3가지</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#9d5443] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#9d5443] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-[#1c4e6f] mb-4">{solution.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#9d5443] hover:bg-[#B85A30] text-white text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              법인파산 관재인 출신 변호사와 상담하기
            </Button>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
