'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  separator?: boolean
  className?: string
  style?: React.CSSProperties
}

export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  separator = false,
  className = '',
  style = {}
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  const formatNumber = (num: number) => {
    if (separator) {
      return num.toLocaleString('ko-KR')
    }
    return num.toString()
  }

  const maxWidth = `${formatNumber(end).length}ch`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuad = (t: number) => t * (2 - t)
      const currentCount = Math.floor(easeOutQuad(progress) * end)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return (
    <span 
      ref={elementRef} 
      className={`inline-block tabular-nums ${className}`}
      style={{ minWidth: maxWidth, ...style }}
    >
      {formatNumber(count)}
    </span>
  )
}
