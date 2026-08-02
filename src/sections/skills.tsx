"use client"

import { useState } from "react";
import { techs } from "@/data/skills";

type SkillCategory = "Todos" | "Frontend" | "Backend" | "Database" | "Ferramentas";

const categories: SkillCategory[] = ["Todos", "Frontend", "Backend", "Database", "Ferramentas"];

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("Todos");

  const filtered = active === "Todos" ? techs : techs.filter((s) => s.category === active);

  return (
    <section id="skills" className="bg-background py-24">
      <div className="max-w-310 mx-auto px-10 max-md:px-5">
        <div className="mb-12">
          <div className="flex items-end justify-between not-md:justify-center flex-wrap gap-6">
            <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground tracking-tight leading-tight" data-aos="fade-up">
              Habilidades Técnicas
            </h2>
            <div className="hidden sm:flex gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="text-sm font-semibold px-3.5 py-1.5 rounded-md border cursor-pointer transition-all duration-200 tracking-wide"
                  style={{
                    backgroundColor: active === cat ? "var(--accent)" : "transparent",
                    borderColor: active === cat ? "var(--accent)" : "var(--border)",
                    color: active === cat ? "var(--accent-foreground)" : "var(--muted-foreground)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:hidden">
          {(["Frontend", "Backend", "Database", "Ferramentas"] as const).map((cat, catIndex) => {
            const categoryLabel = cat === "Frontend" ? "Front-end" : cat === "Backend" ? "Back-end" : cat;
            return (
              <div key={cat}>
                <h3
                  className="font-poppins text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center"
                  data-aos="fade-up"
                  data-aos-delay={catIndex * 100}
                >
                  {categoryLabel}
                </h3>
                <div className="grid grid-cols-3 gap-x-4 gap-y-5">
                  {techs.filter((t) => t.category === cat).map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2"
                      data-aos="zoom-in"
                      data-aos-delay={skillIndex * 50}
                    >
                      <skill.icon size={30} style={{ color: skill.color }} />
                      <span className="text-xs font-medium text-muted-foreground text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden sm:block">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
            {filtered.map((skill, index) => (
              <div key={skill.name} data-aos="zoom-in" data-aos-delay={index * 50}>
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: typeof techs[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl p-5 flex flex-col items-center gap-2.5 cursor-default transition-all duration-200"
      style={{
        backgroundColor: hovered ? "var(--card-hover)" : "var(--card)",
        border: "1px solid",
        borderColor: hovered ? "rgba(124,58,237,0.3)" : "var(--border)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center"
        style={{
          color: skill.color,
        }}
      >
        <skill.icon size={30} />
      </div>
      <span
        className="text-xs font-semibold text-center transition-colors duration-200"
        style={{ color: hovered ? "var(--foreground)" : "var(--muted-foreground)" }}
      >
        {skill.name}
      </span>
    </div>
  );
}
