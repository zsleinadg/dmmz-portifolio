import { About } from "../sections/about"
import Container from "../components/container"
import { Header } from "../components/header"
import { Hero } from "../sections/hero"
import { Projects } from "../sections/projects"
import { Contact } from "../sections/contact"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <About />
          <Projects/>
          <Contact/>
        </Container>
      </main>
      <Footer/>
    </>
  )
}