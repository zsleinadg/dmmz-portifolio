"use client"

import { useState } from "react";
import Image from "next/image";
import { FlaskConical, BookOpen, GitCommit, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectLightbox } from "@/components/project-lightbox";
import { toolGroups, aiWorkflow, workflowImages, type ToolItem } from "@/data/tooling";

export function Tooling() {
  const [workflowIndex, setWorkflowIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const workflowPrev = () =>
    setWorkflowIndex((i) => (i > 0 ? i - 1 : workflowImages.length - 1));
  const workflowNext = () =>
    setWorkflowIndex((i) => (i < workflowImages.length - 1 ? i + 1 : 0));

  const engineeringPillars = [
    "Qualidade de Código",
    "CI/CD & Automação",
    "APIs Robustas",
    "AI-Driven Dev"
  ];

  return (
    <section id="tooling" className="bg-background py-24 border-t border-border/40">
      <div className="max-w-310 mx-auto px-10 max-md:px-5">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground tracking-tight leading-tight max-md:text-center">
            Workflow, Integrações & IA
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-200">
            Como transformo código em produtos resilientes: pipelines automatizados, integrações robustas com SaaS e uso estratégico de IA para ganho de produtividade com segurança.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-200">
            OBS: a IA aqui é utilizada como uma FERRAMENTA para acelerar o desenvolvimento.
          </p>
          <div className="mt-5 flex gap-2 flex-wrap max-md:justify-center">
            {engineeringPillars.map((pillar) => (
              <span
                key={pillar}
                className="font-mono text-xs font-semibold text-accent bg-accent/2 border border-accent/15 rounded-lg px-3 py-1.5"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {toolGroups.map((group, groupIndex) => (
            <div key={group.id} data-aos="fade-up" data-aos-delay={groupIndex * 100}>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                {group.title}
              </h3>
              <p className="mt-1 mb-5 text-sm text-muted-foreground">
                {group.description}
              </p>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
                {group.tools.map((tool, index) => (
                  <div key={tool.name} data-aos="zoom-in" data-aos-delay={index * 40}>
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-xl font-bold text-foreground tracking-tight">
            Uso Prático de IA na Engenharia
          </h3>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">
            Diretrizes e práticas para acelerar o desenvolvimento mantendo a segurança do código.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {aiWorkflow.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-accent/30 transition-all flex flex-col"
              >
                <div className="w-10 h-10 mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <item.icon size={20} />
                </div>
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch" data-aos="fade-up">
          
          <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Metodologia & Organização
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                O código final é apenas o resultado de um processo rigoroso. Utilizo ferramentas e padrões bem definidos para garantir a consistência das minhas entregas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-accent/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <BookOpen size={18} />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">Segundo Cérebro (Obsidian)</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Utilizo o Obsidian para organizar ativamente a evolução das minhas skills, documentar componentes, padrões arquiteturais (design patterns) e práticas de código para fácil reuso.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-accent/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <GitCommit size={18} />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">Commits Semânticos via IA</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gero mensagens de commit automatizadas utilizando IA guiada por um prompt rigoroso e personalizado criado por mim. Isso garante um histórico semântico, rastreável e impecável.
                </p>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-2 max-lg:aspect-3/2 lg:min-h-87.5 relative overflow-hidden group shadow-sm cursor-pointer"
            onClick={() => setZoomOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Ampliar imagem do fluxo de trabalho"
            onKeyDown={(e) => { if (e.key === "Enter") setZoomOpen(true); }}
          >
            {workflowImages.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Demonstração do meu fluxo de trabalho ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`object-cover rounded-xl transition-opacity duration-500 ${i === workflowIndex ? "opacity-100" : "opacity-0"}`}
              />
            ))}

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none rounded-xl">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-white font-medium">
                Ver imagens
              </div>
            </div>

            {workflowImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); workflowPrev(); }}
                  aria-label="Imagem anterior"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 cursor-pointer border-none transition-colors z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); workflowNext(); }}
                  aria-label="Próxima imagem"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 cursor-pointer border-none transition-colors z-10"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {workflowImages.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setWorkflowIndex(i); }}
                      aria-label={`Ir para imagem ${i + 1}`}
                      className={`h-1.5 rounded-full cursor-pointer border-none transition-all ${i === workflowIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

        </div>

        <div
          data-aos="fade-up"
          className="mt-8 p-6 rounded-2xl border border-accent/25 bg-accent/5 flex items-start sm:items-center gap-5 flex-col sm:flex-row"
        >
          <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center">
            <FlaskConical size={24} className="text-accent" />
          </div>
          <div>
            <h4 className="font-bold text-foreground flex items-center gap-2">
              Pesquisa & Desenvolvimento: RAG e Avaliação de LLMs
            </h4>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              Estudo e implementação prática de arquiteturas <strong>RAG (Retrieval-Augmented Generation)</strong> e técnicas de validação de saídas de IA, focando em redução de alucinações para sistemas corporativos.
            </p>
          </div>
        </div>
      </div>

      {zoomOpen && (
        <ProjectLightbox
          images={workflowImages}
          title="Fluxo de trabalho"
          initialIndex={workflowIndex}
          onClose={() => setZoomOpen(false)}
        />
      )}
    </section>
  );
}

function ToolCard({ tool }: { tool: ToolItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl p-4 flex flex-col items-center gap-2 cursor-default transition-all duration-200 h-full"
      style={{
        backgroundColor: hovered ? "var(--card-hover)" : "var(--card)",
        border: "1px solid",
        borderColor: hovered ? "rgba(124,58,237,0.3)" : "var(--border)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ color: tool.color }}>
        <tool.icon size={28} />
      </div>
      <span
        className="text-xs font-semibold text-center transition-colors duration-200"
        style={{ color: hovered ? "var(--foreground)" : "var(--muted-foreground)" }}
      >
        {tool.name}
      </span>
      
      {tool.proof && (
        <span className="font-mono text-[10px] text-muted-foreground text-center line-clamp-1 px-1">
          {tool.proof}
        </span>
      )}
    </div>
  );
}