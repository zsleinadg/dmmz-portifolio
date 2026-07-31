"use client"

import { useState, useEffect } from "react";
import { projectsData } from "@/data/projects";
import { ExternalLink, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

export function Projects() {
  const [lightbox, setLightbox] = useState<{ projectIndex: number; imageIndex: number } | null>(null);

  return (
    <section id="projects" className="bg-[#08090D] py-24 border-t border-[#242733]">
      <div className="max-w-310 mx-auto px-10 max-md:px-5">
        <div className="mb-12">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-[#F5F5F7] tracking-tight leading-tight">
              Projetos
            </h2>
            <a
              href="https://github.com/zsleinadg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-semibold text-[#A78BFA] no-underline transition-opacity hover:opacity-80"
            >
              Ver todos no GitHub
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4 max-md:grid-cols-1">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={() => setLightbox({ projectIndex: i, imageIndex: 0 })}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <ProjectLightbox
          project={projectsData[lightbox.projectIndex]}
          initialIndex={lightbox.imageIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onImageClick,
}: {
  project: typeof projectsData[0];
  onImageClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl overflow-hidden transition-all duration-250 flex flex-col"
      style={{
        backgroundColor: hovered ? "#151821" : "#11131A",
        border: "1px solid",
        borderColor: hovered ? "rgba(124,58,237,0.2)" : "#242733",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div
        className="h-45 relative flex items-center justify-center border-b border-[#242733] cursor-pointer overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(79,70,229,0.06) 100%)",
        }}
        onClick={onImageClick}
      >
        {project.images[0] && (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-white font-medium">
            Ver imagens
          </div>
        </div>

        {(project.badges ?? []).length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {project.badges!.map((badge) => (
              <span
                key={badge}
                className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded"
                style={{
                  color: "rgba(255,255,255,0.50)",
                  backgroundColor: "rgba(124,58,237,0.10)",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-[17px] font-bold text-[#F5F5F7] tracking-tight leading-tight">
          {project.title}
        </h3>

        <p className="text-base text-[#6F7482] leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        <div className="flex gap-1.5 flex-wrap">
          {project.techs.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] font-semibold text-[#6F7482] border border-[#242733] rounded px-2 py-0.5 bg-[#0D0F14]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-1 border-t border-[#242733] mt-1">
          {project.linkProject && (
            <a
              href={project.linkProject}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-base font-semibold text-[#6F7482] no-underline py-1 transition-colors hover:text-[#A78BFA]"
            >
              Ver projeto
              <ExternalLink size={13} />
            </a>
          )}
          {project.linkRepo && project.linkRepo !== "#" && (
            <a
              href={project.linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-base font-semibold text-[#6F7482] no-underline py-1 transition-colors hover:text-[#A78BFA]"
            >
              Código
              <GithubIcon />
            </a>
          )}
          
        </div>
      </div>
    </div>
  );
}

function ProjectLightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: typeof projectsData[0];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : project.images.length - 1));
  const next = () => setIndex((i) => (i < project.images.length - 1 ? i + 1 : 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project.images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 text-white/60 hover:text-white bg-none border-none cursor-pointer p-2 z-10"
        aria-label="Fechar"
      >
        <X size={28} />
      </button>

      {project.images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/60 hover:text-white bg-none border-none cursor-pointer p-2 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/60 hover:text-white bg-none border-none cursor-pointer p-2 z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={36} />
          </button>
        </>
      )}

      <div className="max-w-5xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={project.images[index]}
          alt={`${project.title} - ${index + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
        <p className="text-center text-sm text-white/50 mt-2">
          {index + 1} / {project.images.length}
        </p>
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
