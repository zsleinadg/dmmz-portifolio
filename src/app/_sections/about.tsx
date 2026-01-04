import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiFirebase,
    SiSupabase
} from "react-icons/si"
import { ReactNode } from "react"

interface TechItemProps {
    icon: ReactNode,
    name: string,
    color: string
}

const techs: TechItemProps[] = [
    { icon: <SiHtml5 />, name: "HTML5", color: "text-orange-600" },
    { icon: <SiCss3 />, name: "CSS3", color: "text-blue-600" },
    { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-500" },
    { icon: <SiReact />, name: "React", color: "text-sky-500" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-900" },
    { icon: <SiFirebase />, name: "Firebase", color: "text-amber-500" },
    { icon: <SiSupabase />, name: "Supabase", color: "text-emerald-500" },
]


export function About() {

    function Tech({ icon, name, color }: TechItemProps) {
        return (
            <div className={`flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110`}>
                <div className={`text-4xl ${color}`}>{icon}</div>
                <span className="text-sm font-medium text-gray-600">{name}</span>
            </div>
        )
    }

    return (
        <section id="about" className="w-full px-4 pb-16">

            <div className=" max-w-4xl mx-auto flex flex-col items-center text-center gap-10">

                <h1 className=" text-3xl font-bold
                sm:text-4xl md:text-5xl">
                    Sobre mim
                </h1>

                <p className="text-base leading-relaxed text-gray-600
                sm:text-lg md:text-xl">
                    Sou um desenvolvedor Front-End focado em criar interfaces modernas,
                    responsivas e acessíveis, utilizando tecnologias atuais e boas práticas
                    de desenvolvimento.
                </p>

                <div className="w-full">
                    <h2 className=" text-xl font-semibold mb-6 text-gray-800">
                        Tecnologias que utilizo
                    </h2>

                    <div className=" grid grid-cols-3 gap-6
                    sm:grid-cols-4 md:grid-cols-5">
                        {techs.map((tech) => (
                            <Tech
                                key={tech.name}
                                icon={tech.icon}
                                name={tech.name}
                                color={tech.color} />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}