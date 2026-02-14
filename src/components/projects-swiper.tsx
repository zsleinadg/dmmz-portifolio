"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectsSwiperProps {
  images: string[];
  isFirstProject: boolean;
}

export function ProjectsSwiper({ images, isFirstProject }: ProjectsSwiperProps) {
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
            <div className="relative w-full aspect-video flex items-center justify-center bg-gray-100 overflow-hidden">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                priority={isFirstProject && index === 0}
                loading={isFirstProject && index === 0 ? "eager" : "lazy"}
              />
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