"use client"

import { useState } from "react";
import { courses } from "@/data/courses";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const typeConfig: Record<string, { icon: typeof GraduationCap; color: string }> = {
  graduation: { icon: GraduationCap, color: "#7C3AED" },
  course: { icon: BookOpen, color: "#4F46E5" },
  certification: { icon: Award, color: "#8B5CF6" },
};

const educationData = courses.map((c, i) => ({
  type: i === 0 ? "graduation" : "course",
  institution: c.school,
  course: c.title,
  status: c.status,
  icon: (i === 0 ? GraduationCap : BookOpen) as typeof GraduationCap,
  color: i === 0 ? "#7C3AED" : "#4F46E5",
}));

export function Education() {
  return (
    <section id="education" className="bg-[#0D0F14] py-24 border-t border-[#242733]">
      <div className="max-w-310 mx-auto px-10 max-md:px-5">
        <div className="mb-12">
          <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-[#F5F5F7] tracking-tight leading-tight">
            Formação e Cursos
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {educationData.map((edu, i) => (
            <EducationCard key={i} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu }: { edu: typeof educationData[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = edu.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-200"
      style={{
        backgroundColor: hovered ? "#151821" : "#11131A",
        border: "1px solid",
        borderColor: hovered ? "rgba(124,58,237,0.25)" : "#242733",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{
            backgroundColor: `${edu.color}15`,
            border: `1px solid ${edu.color}25`,
          }}
        >
          <Icon size={18} color={edu.color} />
        </div>
        <span
          className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 shrink-0"
          style={{
            color: edu.color,
            border: `1px solid ${edu.color}30`,
            backgroundColor: `${edu.color}10`,
          }}
        >
          {edu.status}
        </span>
      </div>

      <div>
        <p className="text-[11px] text-[#6F7482] font-medium uppercase tracking-wider mb-1">
          {edu.institution}
        </p>
        <h3 className="text-base font-bold text-[#F5F5F7] leading-tight tracking-tight">
          {edu.course}
        </h3>
      </div>
    </div>
  );
}
