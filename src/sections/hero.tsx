"use client"

import Image from "next/image";
import profile from "@/../public/assets/profilepicbetter.png";
import { ArrowRight, Download, FileText } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function FloatingTag({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute font-mono text-xs lg:text-lg font-medium text-accent/70 select-none animate-[floatTag_3s_ease-in-out_infinite] ${className ?? ""}`}
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

            <h1 className="font-bold leading-[1.1] mb-6 tracking-tight">
              <span
                className="block text-[clamp(48px,6vw,72px)] text-foreground"
              >
                Desenvolvedor
              </span>
              <span
                className="block text-[clamp(48px,6vw,72px)] bg-linear-to-b from-indigo-600 to-purple-900 bg-clip-text text-transparent"
              >
                Full-Stack
              </span>
            </h1>

            <p className="font-medium text-base lg:text-lg leading-relaxed text-muted-foreground max-w-130 lg:max-w-150 mb-10 max-[900px]:mx-auto">
              Olá, me chamo <span className="text-foreground font-bold">Daniel Marques</span>. Sou um desenvolvedor Full-Stack focado em criar soluções completas, do design ao deploy, utilizando tecnologias atuais e boas práticas de desenvolvimento.
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
                href="https://drive.google.com/uc?export=download&id=1AX9OKL-KpFL6uNmJHzJ2I9lWC2l3C2ov"
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
                href="https://drive.google.com/uc?export=download&id=1AX9OKL-KpFL6uNmJHzJ2I9lWC2l3C2ov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground no-underline font-medium transition-all hover:-translate-y-1 hover:text-indigo-600"
              >
                Currículo
                <FileText size={22} />
              </a>
            </div>
          </div>

          <div className="shrink-0 flex items-center justify-center relative max-[900px]:order-first">
            <div className="absolute w-120 h-120 max-[900px]:w-95 max-[900px]:h-95 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.05) 50%, transparent 75%)" }} />
            <div className="absolute w-110 h-110 max-[900px]:w-80 max-[900px]:h-80 rounded-full border border-[rgba(124,58,237,0.15)] pointer-events-none" />
            <div className="absolute w-120 h-120 max-[900px]:w-90 max-[900px]:h-90 rounded-full border border-[rgba(124,58,237,0.06)] pointer-events-none" />

            <div className="w-100 h-100 max-[900px]:w-70 max-[900px]:h-70 rounded-full overflow-hidden border-2 border-[rgba(124,58,237,0.3)] relative shadow-[0_0_60px_rgba(124,58,237,0.12),0_0_120px_rgba(124,58,237,0.06)]">
              <Image
                src={profile}
                alt="Daniel Marques"
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

      <style>{`
        @keyframes floatTag {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
