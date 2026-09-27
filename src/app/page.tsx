import { Navbar } from "@/components/navbar"
import { Hero } from "@/sections/hero"
import { Skills } from "@/sections/skills"
import { Tooling } from "@/sections/tooling"
import { Education } from "@/sections/education"
import { Projects } from "@/sections/projects"
import { Contact } from "@/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Tooling />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
