import { projectsData } from "@/data/projects";
import { ProjectsSwiper } from "../_components/projects-swiper";

export function Projects() {
  return (
    <section className="w-full px-4 mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-16 sm:text-4xl">
        Projetos
      </h2>

      <div className="flex flex-col gap-20">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-2 gap-10 items-center not-lg:grid-cols-1"
          >
            
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100 border border-gray-200">
              <ProjectsSwiper images={project.images} />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-gray-800 not-sm:text-center">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 text-sm text-gray-500 select-none">
                {project.techs.map((tech) => (
                  <li key={tech} className="px-3 py-1 bg-gray-200 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-4 not-sm:justify-center">
                <a
                  href={project.linkProject}
                  target="_blank"
                  className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                >
                  Ver projeto
                </a>

                <a
                  href={project.linkRepo}
                  target="_blank"
                  className="px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-200 transition"
                >
                  Ver código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}