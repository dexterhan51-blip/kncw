"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const videos = [
    {
      id: "OCgMP2pNyWM",
      title: "개인회생 개인파산 현실적으로 드는 비용 총정리 + 꿀팁",
      url: "https://youtu.be/OCgMP2pNyWM?si=AQjLYrCa3x0NMFcM",
    },
    {
      id: "Ctz1JdauUfU",
      title: "개인회생 신청 전후, 반드시 알아야 할 핵심 체크리스트 11가지",
      url: "https://youtu.be/Ctz1JdauUfU?si=0orAgHQQaqQYPCBG",
    },
    {
      id: "-M_q8Mqmk3g",
      title: "빚 못 갚을 것 같으면 그냥 갚지 마세요",
      url: "https://youtu.be/-M_q8Mqmk3g?si=kny_Me-v2_S3Rtje",
    },
    {
      id: "Rg7O6_x9gw8",
      title: "이 5가지 행동으로 내가 경제적 위기 상황인지 확인하세요",
      url: "https://youtu.be/Rg7O6_x9gw8?si=saVj_aHdIgVSCM2n",
    },
    {
      id: "QTLF-lHeprk",
      title: "개인회생 신청 전에 제발 이러지 마세요!",
      url: "https://youtu.be/QTLF-lHeprk?si=D7MM-fSEhkTni2a5",
    },
    {
      id: "j08tkiXaNTo",
      title: "개인파산 신청 전에 이것들은 알아두세요!",
      url: "https://www.youtube.com/watch?v=j08tkiXaNTo",
    },
  ]

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const currentVideo = videos[currentIndex]

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 8000)
  }, [videos.length])

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const togglePlayPause = () => {
    if (isPlaying) {
      stopAutoPlay()
    } else {
      startAutoPlay()
    }
    setIsPlaying((prev) => !prev)
  }

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay()
    }
    return () => stopAutoPlay()
  }, [isPlaying, startAutoPlay, stopAutoPlay])

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${currentVideo.id}`}
          title={currentVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" onClick={prevVideo} className="h-10 w-10 rounded-full bg-transparent">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-hope" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={togglePlayPause}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
          aria-label={isPlaying ? "자동 재생 일시정지" : "자동 재생 시작"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Play className="h-4 w-4 text-muted-foreground" />
          )}
        </button>

        <Button variant="outline" size="icon" onClick={nextVideo} className="h-10 w-10 rounded-full bg-transparent">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <p className="mt-4 text-center text-base md:text-lg font-medium text-foreground">{currentVideo.title}</p>
    </div>
  )
}
