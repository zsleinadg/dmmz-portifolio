"use client";

import Link from "next/link";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/zsleinadg", icon: <SiGithub />, label: "GitHub", hoverColor: "hover:text-foreground" },
    { href: "https://linkedin.com/in/danielmunizworks", icon: <FaLinkedin />, label: "LinkedIn", hoverColor: "hover:text-[#0077B5]" },
    { href: "https://instagram.com/zsleinadg", icon: <SiInstagram />, label: "Instagram", hoverColor: "hover:text-pink-600" },
  ];

  return (
    <footer className="w-full border-t border-border pb-6 pt-6">
      <div className="max-w-310 mx-auto px-5 flex flex-col items-center min-[395px]:flex-row min-[395px]:justify-between gap-5 text-muted-foreground text-sm">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-poppins text-xl font-bold bg-linear-to-b px-2 italic from-indigo-600 to-purple-900 text-transparent bg-clip-text select-none border-none cursor-pointer"
        >
          DM
        </button>

        <p className="text-center">© {currentYear} • Daniel Marques</p>

        <nav className="flex items-center opacity-75 gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className={`${link.hoverColor} transition-colors text-lg`}
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
