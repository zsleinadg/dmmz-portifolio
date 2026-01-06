import { About } from "./_sections/about"
import Container from "./_components/container"
import { Header } from "./_components/header"
import { Hero } from "./_sections/hero"
import { Projects } from "./_sections/projects"
import { Contact } from "./_sections/contact"
import { Footer } from "./_components/footer"

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