"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowsExpand } from "react-icons/hi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectsSwiperProps {
  images: string[];
  isFirstProject: boolean;
  onImageClick?: (index: number) => void;
}

export function ProjectsSwiper({ images, isFirstProject, onImageClick }: ProjectsSwiperProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full aspect-video bg-gray-100 animate-pulse rounded-lg" />;

  return (
    <div className="relative w-full h-full group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={false}
        className="w-full h-full rounded-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full aspect-video flex items-center justify-center bg-gray-100 overflow-hidden cursor-pointer group/slide"
              onClick={() => onImageClick?.(index)}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain transition-transform duration-300 group-hover/slide:scale-105" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                priority={isFirstProject && index === 0}
                loading={isFirstProject && index === 0 ? "eager" : "lazy"}
              />

              <div className="absolute inset-0 bg-black/0 group-hover/slide:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <HiArrowsExpand className="text-white/0 group-hover/slide:text-white/80 transition-all duration-300 size-8" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #4338ca !important; /* Indigo-700 para garantir 100 em acessibilidade */
          transition: all 0.3s ease;
          opacity: 0;
        }
        .group:hover .swiper-button-next, 
        .group:hover .swiper-button-prev {
          opacity: 1;
        }
        .swiper-pagination-bullet {
          background: #000 !important;
          opacity: 0.3 !important;
        }
        .swiper-pagination-bullet-active {
          background: #4338ca !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}