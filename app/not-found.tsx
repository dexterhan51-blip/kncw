import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileX, Home, Trash2 } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        {/* 404 Large Background Text */}
        <div className="relative mb-8">
          <h1 className="text-[200px] md:text-[280px] font-bold text-gray-200 leading-none select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <FileX className="w-24 h-24 md:w-32 md:h-32 text-[#1a365d] opacity-80" />
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#1a365d] mb-6 leading-tight">
          404 Error
          <br />
          고객님의 빚도 이 페이지처럼
          <br />
          <span className="text-[#9d5443] underline decoration-2 underline-offset-4">'찾을 수 없음'</span>
          으로 만들고 싶습니다.
        </h2>

        {/* Subtext Description */}
        <p className="text-base md:text-lg text-[#4b5563] leading-relaxed mb-12 max-w-2xl mx-auto">
          삭제된 페이지를 보며 당황하셨나요?
          <br />
          하지만 감당할 수 없는 채무는 정말로 사라져야 합니다.
          <br />
          <span className="font-semibold text-[#1a365d]">9,375명의 의뢰인</span>이 빚을 지우고 새 삶을 찾았습니다.
          <br />
          이제, 고객님의 채무 기록을 지울 차례입니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/gfa">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#1a365d] hover:bg-[#163d55] text-white px-8 py-6 text-base md:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Trash2 className="w-5 h-5 mr-2" />내 빚도 '삭제' 가능한지 확인하기
            </Button>
          </Link>

          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-gray-400 text-[#4b5563] hover:bg-gray-100 px-8 py-6 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent"
            >
              <Home className="w-5 h-5 mr-2" />
              홈으로 이동
            </Button>
          </Link>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-gray-400">
          <FileX className="w-4 h-4" />
          <span>페이지를 찾을 수 없습니다</span>
        </div>
      </div>
    </div>
  )
}
