import Link from "next/link"
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"

interface SocialLinkProps {
        href: string
        icon: React.ReactNode
        label: string
        hoverColor: string
    }

export function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks: SocialLinkProps[] = [
        { href: "https://github.com/zsleinadg", icon: <SiGithub />, label: "GitHub", hoverColor: "hover:text-gray-900" },
        { href: "https://linkedin.com/in/danielmunizworks", icon: <SiLinkedin />, label: "LinkedIn", hoverColor: "hover:text-blue-600" },
        { href: "https://instagram.com/zsleinadg", icon: <SiInstagram />, label: "Instagram", hoverColor: "hover:text-pink-600" },
    ]

    return (
        <footer className="w-full border-t border-gray-100 pb-6 pt-6">
            <div className="max-w-7xl mx-auto px-5 flex flex-col items-center min-[395px]:flex-row min-[395px]:justify-between gap-5 text-gray-500 text-sm">

                <h1 className="text-xl font-bold bg-linear-to-b px-2 italic from-indigo-600 to-purple-900 text-transparent bg-clip-text select-none">
                    DM
                </h1>

                <p className="text-center">© {currentYear} • Daniel Marques</p>

                <nav className="flex items-center gap-5">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            className={`text-gray-400 ${link.hoverColor} transition-colors text-lg`}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </Link>
                    ))}
                </nav>

            </div>
        </footer>
    )
}