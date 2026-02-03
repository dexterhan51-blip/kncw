"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ConsultationModal } from "@/components/consultation-modal"

export function CorpProblemSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const problems = [
    {
      title: "직원 급여",
      description: "직원 월급과 퇴직금을 사비로, 대출로 힘겹게 막고 있다.",
    },
    {
      title: "자금 동결",
      description: "주거래 은행에 연체가 생겨 법인 계좌가 묶일까 봐 매일이 불안하다.",
    },
    {
      title: "형사 처벌",
      description: "거래처 대금 미납으로 사기죄 고소나 형사 처벌을 받을까 두렵다.",
    },
    {
      title: "연대 보증",
      description: "법인이 무너지면 내 집과 가족의 재산까지 다 넘어갈 것 같다.",
    },
    {
      title: "막막함",
      description: "법인 빚을 정리하고 싶은데, 어디서부터 손대야 할지 모르겠다.",
    },
  ]

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#9d5443] tracking-wide uppercase mb-4">PROBLEM</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              혹시 지금, 대표님 혼자
              <br />이 모든 위험을 막고 계신가요?
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#9d5443] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#9d5443] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">[{problem.title}]</h4>
                    <p className="text-gray-700">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold mb-6 text-gray-900">
              이 중 하나라도 해당된다면
              <br />
              지금이 가장 중요한 '골든타임'입니다.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-[#9d5443] hover:bg-[#B85A30] text-white text-lg px-8 py-4 rounded-full"
            >
              3분 만에 진단받기
            </Button>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
