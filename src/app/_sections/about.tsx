import { techs } from "@/data/skills"
import { courses } from "@/data/courses"

export function About() {
    return (
        <section id="about" className="w-full px-4 pb-16">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
                
                <div 
                    className="space-y-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Sobre mim
                    </h1>
                    <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl max-w-2xl mx-auto">
                        Sou um desenvolvedor Front-End focado em criar interfaces modernas,
                        responsivas e acessíveis, utilizando tecnologias atuais e boas práticas
                        de desenvolvimento.
                    </p>
                </div>

                <div className="w-full">
                    <h2 
                        className="text-xl font-semibold mb-8 text-gray-800 flex items-center justify-center gap-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <span className="h-px w-8 bg-gray-300"></span>
                        Tecnologias que utilizo
                        <span className="h-px w-8 bg-gray-300"></span>
                    </h2>

                    <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5">
                        {techs.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div 
                                    key={tech.name} 
                                    className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 50}
                                >
                                    <div className={`text-4xl ${tech.color}`}>
                                        <Icon /> 
                                    </div>
                                    <span className="text-sm font-medium text-gray-600">{tech.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="w-full pt-10 border-t border-gray-200">
                    <h2 
                        className="text-xl font-semibold mb-8 text-gray-800 flex items-center justify-center gap-2"
                        data-aos="fade-up"
                    >
                         <span className="h-px w-8 bg-gray-300"></span>
                         Formação e Cursos
                         <span className="h-px w-8 bg-gray-300"></span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        {courses.map((course, index) => (
                            <div 
                                key={index} 
                                className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                                        {course.title}
                                    </h3>
                                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md ${
                                        course.status === 'Concluído' 
                                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                                        : 'bg-amber-50 text-amber-600 border border-amber-100'
                                    }`}>
                                        {course.status}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm font-medium">{course.school}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}