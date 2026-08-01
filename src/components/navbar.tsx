"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { label: "Sobre mim", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = "" };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-17 bg-background/75 backdrop-blur-xl transition-colors duration-300"
      style={{
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-310 mx-auto px-10 h-full flex items-center justify-between max-md:px-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-4xl font-bold italic bg-linear-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text border-none cursor-pointer select-none pr-1"
        >
          DM
        </button>

        <nav className="flex items-center gap-4 max-md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="bg-none border-none cursor-pointer text-base font-medium text-muted-foreground px-3 py-2 rounded-md transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hidden max-md:flex bg-none border-none cursor-pointer text-muted-foreground p-1.5"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-17 left-0 right-0 bg-background backdrop-blur-xl border-b border-border px-6 pb-6 pt-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="bg-none border-none cursor-pointer text-left text-lg font-medium text-muted-foreground py-3 border-b border-border transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
