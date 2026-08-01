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
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground tracking-tight leading-tight">
              Habilidades Técnicas
            </h2>
            <div className="flex gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="text-xs font-semibold px-3.5 py-1.5 rounded-md border cursor-pointer transition-all duration-200 tracking-wide"
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

        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
          {filtered.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
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
        className="w-11 h-11 rounded-lg flex items-center justify-center font-mono text-xs font-bold tracking-tight"
        style={{
          backgroundColor: `${skill.color}15`,
          border: `1px solid ${skill.color}25`,
          color: skill.color,
        }}
      >
        {skill.icon}
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
