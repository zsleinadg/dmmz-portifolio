// src/components/Hero/Hero.tsx
import Image from 'next/image'
import profile from '../../../public/assets/profile.jpg'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { IoDocumentText } from 'react-icons/io5'

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[90vh] px-5">
      <Image
        src={profile}
        alt="Foto de perfil"
        className="rounded-full"
        width={350}
        priority
      />

      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h2 className="text-5xl lg:text-7xl font-bold text-gray-800">
          Desenvolvedor <br />
          <span className="bg-linear-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text">
            Front End
          </span>
        </h2>

        <p className="text-lg max-w-4xl">
          Olá, me chamo <strong>Daniel Marques</strong>. Sou um desenvolvedor
          focado em evolução constante e excelência técnica.
          Proporciono aplicações de qualidade e com as tecnologias mais nodernas.
          Busco obstáculos e desafíos para aprimorar minha habilidade de resolução de problemas.
        </p>

        <div className='flex items-center justify-center lg:justify-start'>
          <ul className='flex flex-wrap gap-5 font-medium text-gray-800'>
            <li>
              <a
                href="https://github.com/zsleinadg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black transition-all hover:-translate-y-1"
              >
                <span>Github</span>
                <SiGithub size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/danielmunizworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0077B5] transition-all hover:-translate-y-1"
              >
                <span>Linkedin</span>
                <SiLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-2 hover:text-indigo-600 transition-all hover:-translate-y-1"
              >
                <span>Currículo</span>
                <IoDocumentText size={22} />
              </a>
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
}
