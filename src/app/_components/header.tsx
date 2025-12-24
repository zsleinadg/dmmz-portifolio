"use client"

import { useState } from "react"
import styles from "./header.module.css"
import Link from "next/link"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="max-w-7xl mx-auto px-5 py-6 flex justify-between items-center">
                <h1 className="text-4xl font-bold bg-linear-to-b italic pr-1 from-indigo-600 to-purple-900 text-transparent bg-clip-text">
                    DM
                </h1>

                <nav className=" hidden md:block">
                    <ul className="flex gap-3 items-center text-gray-800 text-lg">
                        <li>
                            <Link href="#" className="select-none relative transition hover:text-indigo-600 before:content-['{'] after:content-['}'] before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100 before:transition-all after:transition-all before:text-purple-900 after:text-purple-900 ">
                                Sobre mim
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="select-none relative transition hover:text-indigo-600 before:content-['{'] after:content-['}'] before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100 before:transition-all after:transition-all before:text-purple-900 after:text-purple-900">
                                Experiência
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="select-none relative transition hover:text-indigo-600 before:content-['{'] after:content-['}'] before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100 before:transition-all after:transition-all before:text-purple-900 after:text-purple-900">
                                Contato
                            </Link>
                        </li>

                    </ul>
                </nav>

                <div className="md:hidden">
                    <button
                        className={`${styles.hamburguer} ${isOpen ? styles.open : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>


            </header>
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
                onClick={() => setIsOpen(false)}
            >
                <nav
                    className={styles.overlayMenu}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Link href="#" onClick={() => setIsOpen(false)}>
                        Sobre mim
                    </Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>
                        Experiência
                    </Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>
                        Contato
                    </Link>
                </nav>
            </div>
        </>
    )
}