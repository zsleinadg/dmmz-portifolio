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
    SiSass
} from "react-icons/si"

export interface TechItemProps {
  name: string,
  color: string,
  icon: IconType
}

export const techs: TechItemProps[] = [
  { name: "HTML5", color: "text-orange-600", icon: SiHtml5 },
  { name: "CSS3", color: "text-blue-600", icon: SiCss3 },
  { name: "SCSS", color: "text-pink-600", icon: SiSass },
  { name: "JavaScript", color: "text-yellow-400", icon: SiJavascript },
  { name: "TypeScript", color: "text-blue-500", icon: SiTypescript },
  { name: "Tailwind", color: "text-cyan-500", icon: SiTailwindcss },
  { name: "React", color: "text-sky-500", icon: SiReact },
  { name: "Next.js", color: "text-gray-900", icon: SiNextdotjs },
  { name: "Firebase", color: "text-amber-500", icon: SiFirebase },
  { name: "Supabase", color: "text-emerald-500", icon: SiSupabase },
  { name: "PostgreSQL", color: "text-blue-400", icon: SiPostgresql },
  { name: "Prisma", color: "text-slate-900", icon: SiPrisma },
]