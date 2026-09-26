"use client"

import { useState, useEffect } from "react";
import { projectsData } from "@/data/projects";
import type { CaseSection } from "@/types";
import { ExternalLink, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import { GithubIcon } from "@/components/icons";

type TabId = "overview" | "problem" | "solution" | "architecture";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Visão Geral" },
  { id: "problem", label: "O Problema" },
  { id: "solution", label: "A Solução" },
  { id: "architecture", label: "Arquitetura" },
];

export function Projects() {
  const [lightbox, setLightbox] = useState<{ projectIndex: number; imageIndex: number } | null>(null);
  const [descriptionProject, setDescriptionProject] = useState<{ project: typeof projectsData[0]; index: number } | null>(null);

  function openCase(project: typeof projectsData[0], index: number) {
    setDescriptionProject({ project, index });
  }

  return (
    <section id="projects" className="bg-background py-24">
      <div className="max-w-310 mx-auto px-10 max-md:px-5">
        <div className="mb-12">
          <div
            className="flex items-end justify-between flex-wrap gap-4"
            data-aos="fade-up"
          >
            <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground tracking-tight leading-tight">
              Projetos
            </h2>
            <a
              href="https://github.com/zsleinadg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-semibold text-accent no-underline transition-opacity hover:opacity-80"
            >
              Ver todos no GitHub
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-20 lg:hidden">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col gap-5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="rounded-xl overflow-hidden border border-border bg-card shadow-lg">
                <ProjectCarousel
                  images={project.images}
                  priority={index === 0}
                  onImageClick={(imageIndex) =>
                    setLightbox({ projectIndex: index, imageIndex })
                  }
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-foreground tracking-tight leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  {project.shortDescription}
                </p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {(project.badges ?? []).length > 0 && (
                  <div className="flex gap-1.5 flex-wrap">
                    {project.badges!.map((badge) => (
                      <span
                        key={badge}
                        className="font-mono text-[10px] font-semibold text-accent bg-accent/10 border border-accent/15 rounded px-2 py-0.5"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-1.5 flex-wrap">
                  {project.techs.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-semibold text-muted-foreground border border-border rounded px-2 py-0.5 bg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openCase(project, index)}
                  className="mt-1 inline-flex items-center justify-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-lg px-4 py-2.5 text-sm font-bold cursor-pointer transition-colors hover:bg-accent/20"
                >
                  Problema • Solução • Arquitetura
                </button>

                <div className="flex gap-4 mt-1">
                  {project.linkProject && (
                    <a
                      href={project.linkProject}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-base font-semibold text-muted-foreground no-underline py-1 transition-colors hover:text-accent"
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
                      className="inline-flex items-center gap-1 text-base font-semibold text-muted-foreground no-underline py-1 transition-colors hover:text-accent"
                    >
                      Código
                      <GithubIcon size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4 max-md:grid-cols-1">
            {projectsData.map((project, i) => (
              <div key={project.id} data-aos="fade-up" data-aos-delay={i * 100}>
                <ProjectCard
                  project={project}
                  onImageClick={() => setLightbox({ projectIndex: i, imageIndex: 0 })}
                  onDescriptionClick={() => openCase(project, i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <ProjectLightbox
          project={projectsData[lightbox.projectIndex]}
          initialIndex={lightbox.imageIndex}
          onClose={() => setLightbox(null)}
        />
      )}

      {descriptionProject && (
        <CaseStudyModal
          project={descriptionProject.project}
          onImageClick={(imageIndex) =>
            setLightbox({ projectIndex: descriptionProject.index, imageIndex })
          }
          onClose={() => setDescriptionProject(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onImageClick,
  onDescriptionClick,
}: {
  project: typeof projectsData[0];
  onImageClick: () => void;
  onDescriptionClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full rounded-xl overflow-hidden transition-all duration-250 flex flex-col"
      style={{
        backgroundColor: hovered ? "var(--card-hover)" : "var(--card)",
        border: "1px solid",
        borderColor: hovered ? "rgba(124,58,237,0.2)" : "var(--border)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div
        className="h-45 relative flex items-center justify-center border-b border-border cursor-pointer overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(79,70,229,0.06) 100%)",
        }}
        onClick={onImageClick}
      >
        {project.images[0] && (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover duration-300"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-white font-medium">
            Ver imagens
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-[17px] font-bold text-foreground tracking-tight leading-tight">
          {project.title}
        </h3>

        <p
          className="text-base text-muted-foreground leading-relaxed flex-1"
        >
          {project.shortDescription}

        </p>
        <span onClick={onDescriptionClick} className=" text-base text-accent font-semibold cursor-pointer transition-colors hover:text-accent">Problema • Solução • Arquitetura</span>

        {(project.badges ?? []).length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {project.badges!.map((badge) => (
              <span
                key={badge}
                className="font-mono text-[10px] font-semibold text-accent bg-accent/10 border border-accent/15 rounded px-2 py-0.5"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-1.5 flex-wrap">
          {project.techs.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] font-semibold text-muted-foreground border border-border rounded px-2 py-0.5 bg-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-1 border-t border-border mt-1">
          {project.linkProject && (
            <a
              href={project.linkProject}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-base font-semibold text-muted-foreground no-underline py-1 transition-colors hover:text-accent"
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
              className="inline-flex items-center gap-1 text-base font-semibold text-muted-foreground no-underline py-1 transition-colors hover:text-accent"
            >
              Código
              <GithubIcon size={13} />
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
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project.images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center"
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

      <div
        className="relative w-[90vw] max-w-400 h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.images[index]}
          alt={`${project.title} - ${index + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white/50 select-none">
          {index + 1} / {project.images.length}
        </p>
      </div>
    </div>
  );
}

function CaseStudyModal({
  project,
  onImageClick,
  onClose,
}: {
  project: typeof projectsData[0];
  onImageClick: (imageIndex: number) => void;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const hasCase = Boolean(project.caseStudy);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const visibleTabs = hasCase ? TABS : TABS.filter((t) => t.id === "overview");

  return (
    <div
      className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
        className="relative flex flex-col w-full max-w-200 max-h-[90vh] overflow-hidden bg-card rounded-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 cursor-pointer border-none z-20 transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="p-6 pb-0 pr-12">
          <h3 className="text-xl font-bold text-foreground tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm italic text-muted-foreground">
            {project.shortDescription}
          </p>

          <div role="tablist" aria-label="Seções do case" className="mt-4 flex gap-2 flex-wrap">
            {visibleTabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-4 py-2 text-sm font-bold cursor-pointer border transition-colors ${active
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-input text-muted-foreground border-border hover:text-foreground hover:border-accent/40"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-y-auto p-6 pt-4">
          {activeTab === "overview" && (
            <div>
              <ProjectCarousel images={project.images} onImageClick={onImageClick} />
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex gap-1.5 flex-wrap">
                {project.techs.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] font-semibold text-muted-foreground border border-border rounded px-2 py-0.5 bg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {project.linkProject && (
                  <a
                    href={project.linkProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent no-underline hover:opacity-80"
                  >
                    Ver projeto <ExternalLink size={13} />
                  </a>
                )}
                {project.linkRepo && project.linkRepo !== "#" && (
                  <a
                    href={project.linkRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent no-underline hover:opacity-80"
                  >
                    Código <GithubIcon size={13} />
                  </a>
                )}
              </div>
            </div>
          )}

          {activeTab !== "overview" && project.caseStudy && (
            <CaseSectionView
              section={project.caseStudy[activeTab as "problem" | "solution" | "architecture"]}
              onImageClick={onImageClick}
              baseImages={project.images}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function CaseSectionView({
  section,
  onImageClick,
  baseImages,
}: {
  section: CaseSection;
  onImageClick: (index: number) => void;
  baseImages: string[];
}) {
  function handleSectionImageClick(src: string) {
    const idx = baseImages.indexOf(src);
    onImageClick(idx >= 0 ? idx : 0);
  }

  return (
    <div className="flex flex-col gap-4">
      {section.text.map((p, i) => (
        <p key={i} className="text-base leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="flex flex-col gap-2 rounded-xl bg-input border border-border p-4">
          {section.bullets.map((b) => (
            <li key={b} className="text-sm text-foreground flex gap-2">
              <span aria-hidden="true" className="text-accent font-bold">•</span>
              {b}
            </li>
          ))}
        </ul>
      )}

      {section.images && section.images.length > 0 && (
        <ProjectCarousel
          images={section.images}
          onImageClick={(i) => handleSectionImageClick(section.images![i])}
        />
      )}
    </div>
  );
}
