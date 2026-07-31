export interface TechItemProps {
  name: string;
  icon: string;
  color: string;
  category: "Frontend" | "Backend" | "Database" | "Ferramentas";
}

export const techs: TechItemProps[] = [
  { name: "HTML5", icon: "H5", color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: "C3", color: "#1572B6", category: "Frontend" },
  { name: "SCSS", icon: "SC", color: "#C6538C", category: "Frontend" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", category: "Frontend" },
  { name: "Tailwind", icon: "TW", color: "#38BDF8", category: "Frontend" },
  { name: "React", icon: "Rx", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: "Nx", color: "#F5F5F7", category: "Backend" },
  { name: "Node.js", icon: "Nj", color: "#68A063", category: "Backend" },
  { name: "Python", icon: "Py", color: "#3776AB", category: "Backend" },
  { name: "Prisma", icon: "Pr", color: "#2D3748", category: "Backend" },
  { name: "PostgreSQL", icon: "PG", color: "#336791", category: "Database" },
  { name: "Firebase", icon: "Fb", color: "#FFCA28", category: "Database" },
  { name: "Supabase", icon: "Sb", color: "#3ECF8E", category: "Database" },
  { name: "Docker", icon: "Dk", color: "#2496ED", category: "Ferramentas" },
  { name: "Git", icon: "Gt", color: "#F05032", category: "Ferramentas" },
];
