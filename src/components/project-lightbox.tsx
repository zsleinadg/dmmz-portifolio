"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi"

interface ProjectLightboxProps {
  images: string[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function ProjectLightbox({ images, initialIndex, isOpen, onClose }: ProjectLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") goToPrev()
      if (e.key === "ArrowRight") goToNext()
    }
    window.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose, goToPrev, goToNext])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white z-10 transition-colors"
        aria-label="Fechar"
      >
        <HiX size={32} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10 transition-colors"
            aria-label="Anterior"
          >
            <HiChevronLeft size={44} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10 transition-colors"
            aria-label="Próximo"
          >
            <HiChevronRight size={44} />
          </button>
        </>
      )}

      <div className="relative w-[90vw] h-[85vh]">
        <Image
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1} de ${images.length}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
          quality={100}
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium select-none">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
