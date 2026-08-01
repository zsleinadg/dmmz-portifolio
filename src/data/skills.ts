import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPrisma,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiGit,
  SiSass,
} from "react-icons/si";

export interface TechItemProps {
  name: string;
  icon: IconType;
  color: string;
  category: "Frontend" | "Backend" | "Database" | "Ferramentas";
}

export const techs: TechItemProps[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "Frontend" },
  { name: "SCSS", icon: SiSass, color: "#C6538C", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", category: "Frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#A1A1AA", category: "Backend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063", category: "Backend" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Backend" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Database" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Database" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", category: "Database" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Ferramentas" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Ferramentas" },
];
