import { About } from "./_sections/about"
import Container from "./_components/container"
import { Header } from "./_components/header"
import { Hero } from "./_sections/hero"
import { Projects } from "./_sections/projects"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <About />
          <Projects/>
        </Container>
      </main>
    </>
  )
}