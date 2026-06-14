import { IconType } from "react-icons"
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiFirebase,
    SiSupabase,
    SiPostgresql,
    SiPrisma,
    SiSass,
    SiNodedotjs,
    SiPython,
    SiDocker,
    SiGit
} from "react-icons/si"

export interface TechItemProps {
  name: string,
  color: string,
  icon: IconType,
  category: "Front-end" | "Back-end" | "Database" | "Ferramentas"
}

export const techs: TechItemProps[] = [
  { name: "HTML5", color: "text-orange-600", icon: SiHtml5, category: "Front-end" },
  { name: "CSS3", color: "text-blue-600", icon: SiCss3, category: "Front-end" },
  { name: "SCSS", color: "text-pink-600", icon: SiSass, category: "Front-end" },
  { name: "JavaScript", color: "text-yellow-400", icon: SiJavascript, category: "Front-end" },
  { name: "TypeScript", color: "text-blue-500", icon: SiTypescript, category: "Front-end" },
  { name: "Tailwind", color: "text-cyan-500", icon: SiTailwindcss, category: "Front-end" },
  { name: "React", color: "text-sky-500", icon: SiReact, category: "Front-end" },
  { name: "Next.js", color: "text-gray-900", icon: SiNextdotjs, category: "Back-end" },
  { name: "Node.js", color: "text-green-600", icon: SiNodedotjs, category: "Back-end" },
  { name: "Python", color: "text-yellow-500", icon: SiPython, category: "Back-end" },
  { name: "Prisma", color: "text-slate-900", icon: SiPrisma, category: "Back-end" },
  { name: "PostgreSQL", color: "text-blue-400", icon: SiPostgresql, category: "Database" },
  { name: "Firebase", color: "text-amber-500", icon: SiFirebase, category: "Database" },
  { name: "Supabase", color: "text-emerald-500", icon: SiSupabase, category: "Database" },
  { name: "Docker", color: "text-blue-500", icon: SiDocker, category: "Ferramentas" },
  { name: "Git", color: "text-orange-600", icon: SiGit, category: "Ferramentas" },
]
