export interface TechItemProps {
  name: string
  color: string
  icon: string
}

export const techs: TechItemProps[] = [
  { name: "HTML5", color: "text-orange-600", icon: "SiHtml5" },
  { name: "CSS3", color: "text-blue-600", icon: "SiCss3" },
  { name: "JavaScript", color: "text-yellow-400", icon: "SiJavascript" },
  { name: "TypeScript", color: "text-blue-500", icon: "SiTypescript" },
  { name: "Tailwind", color: "text-cyan-500", icon: "SiTailwindcss" },
  { name: "React", color: "text-sky-500", icon: "SiReact" },
  { name: "Next.js", color: "text-gray-900", icon: "SiNextdotjs" },
  { name: "Firebase", color: "text-amber-500", icon: "SiFirebase" },
  { name: "Supabase", color: "text-emerald-500", icon: "SiSupabase" },
]
