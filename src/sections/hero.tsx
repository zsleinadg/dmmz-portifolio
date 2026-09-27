"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import profile from "@/../public/assets/profilepicbetter.png";
import { ArrowRight, Download, FileText } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

function FloatingTag({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute font-mono text-xs lg:text-lg font-medium text-accent/70 select-none animate-float-tag ${className ?? ""}`}
      style={{
        ...style,
        padding: "0.5rem 1rem",
        borderRadius: "1rem",
        backgroundColor: "var(--float-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "5px 5px 25px rgba(0,0,0,0.50)",
        border: "1px solid var(--float-border)",
        textShadow: "0 0 20px rgba(167,139,250,1), 0 0 50px rgba(167,139,250,0.5)",
      }}
    >
      {text}
    </div>
  );
}

export function Hero() {
  const titles = [
    { line1: "Desenvolvedor", line2: "Full-Stack" },
    { line1: "Analista de", line2: "Sistemas" },
    { line1: "Engenheiro de", line2: "Software" },
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);

      // Troca o texto no meio da animação do glitch (250ms)
      setTimeout(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 250);

      // Finaliza o glitch após 500ms
      setTimeout(() => {
        setIsGlitching(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleTiltMove(e: React.MouseEvent) {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = tiltRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  }

  function resetTilt() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section
      id="about"
      className="min-h-screen bg-background flex items-center relative overflow-hidden pt-17"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute -top-50 -right-25 w-150 h-150 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-310 mx-auto px-10 w-full relative z-10 py-24 max-md:px-5">
        <div className="flex items-center justify-between gap-16 max-[900px]:flex-col max-[900px]:text-center">
          <div className="flex-1 min-w-0">

            <h1 key={titleIndex} aria-live="polite" aria-atomic="true" className={`font-bold leading-[1.1] mb-6 tracking-tight ${isGlitching ? "animate-glitch" : ""}`}>
              <span
                className="block text-[clamp(48px,6vw,72px)] text-foreground transition-all duration-300"
              >
                {titles[titleIndex].line1}
              </span>
              <span
                className="block text-[clamp(48px,6vw,72px)] bg-linear-to-b from-indigo-600 to-purple-900 bg-clip-text text-transparent transition-all duration-300"
              >
                {titles[titleIndex].line2}
              </span>
            </h1>

            <p className="font-medium text-base lg:text-lg leading-relaxed text-muted-foreground max-w-130 lg:max-w-150 mb-10 max-[900px]:mx-auto">
              Olá, me chamo <span className="text-foreground font-bold">Daniel Muniz</span>. Sou um desenvolvedor Full-Stack focado em criar soluções completas, do design ao deploy, utilizando tecnologias atuais e boas práticas de desenvolvimento.
            </p>

            <div className="flex gap-3 mb-12 flex-wrap max-[900px]:justify-center">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground border-none rounded-lg px-6 py-3 text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-[#8B5CF6] hover:-translate-y-0.5"
              >
                Ver projetos
                <ArrowRight size={15} />
              </button>

              <a
                href="https://drive.google.com/file/d/15Q9ScYsAf6Q9hhBtsT9nic_FGba_KpZT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-foreground border border-border rounded-lg px-6 py-3 text-sm font-semibold cursor-pointer transition-all duration-200 hover:border-[#7C3AED] hover:-translate-y-0.5 no-underline"
              >
                Baixar CV
                <Download size={15} />
              </a>
            </div>

            <div className="flex items-center gap-5 max-[900px]:justify-center" data-aos="fade-up" data-aos-delay="300">
              <a
                href="https://github.com/zsleinadg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground no-underline font-medium transition-all hover:-translate-y-1 hover:text-red-700"
              >
                GitHub
                <GithubIcon />
              </a>
              <div className="w-px h-5 bg-border" />
              <a
                href="https://www.linkedin.com/in/danielmunizworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground no-underline font-medium transition-all hover:-translate-y-1 hover:text-[#0077B5]"
              >
                LinkedIn
                <LinkedinIcon />
              </a>
              <div className="w-px h-5 bg-border" />
              <a
                href="https://drive.google.com/file/d/15Q9ScYsAf6Q9hhBtsT9nic_FGba_KpZT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground no-underline font-medium transition-all hover:-translate-y-1 hover:text-indigo-600"
              >
                Currículo
                <FileText size={22} />
              </a>
            </div>
          </div>

          <div className="shrink-0 flex items-center justify-center relative max-[900px]:order-first tilt-scene">
            <div className="absolute w-120 h-120 max-[900px]:w-95 max-[900px]:h-95 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.05) 50%, transparent 75%)" }} />
            <div className="absolute w-110 h-110 max-[900px]:w-80 max-[900px]:h-80 rounded-full border border-[rgba(124,58,237,0.15)] pointer-events-none" />
            <div className="absolute w-120 h-120 max-[900px]:w-90 max-[900px]:h-90 rounded-full border border-[rgba(124,58,237,0.06)] pointer-events-none" />

            <div
              ref={tiltRef}
              onMouseMove={handleTiltMove}
              onMouseLeave={resetTilt}
              className="tilt-inner w-100 h-100 max-[900px]:w-70 max-[900px]:h-70 rounded-full overflow-hidden border-2 border-[rgba(124,58,237,0.3)] relative shadow-[0_0_60px_rgba(124,58,237,0.12),0_0_120px_rgba(124,58,237,0.06)]"
              style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              <Image
                src={profile}
                alt="Daniel Muniz"
                className="w-full h-full object-cover object-top"
                width={1000}
                height={1000}
                priority
                quality={100}
                placeholder="blur"
              />
            </div>

            <FloatingTag text="</>" className="-top-2.5 left-10" style={{ animationDelay: "0s" }} />
            <FloatingTag text="{ }" className="bottom-15 -left-5" style={{ animationDelay: "0.4s" }} />
            <FloatingTag text=">__" className="top-20 -right-7.5" style={{ animationDelay: "0.8s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
