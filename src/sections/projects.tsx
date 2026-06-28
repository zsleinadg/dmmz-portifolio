"use client"

import { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectsSwiper } from "../components/projects-swiper";
import { ProjectLightbox } from "../components/project-lightbox";

const badgeStyle = "bg-violet-100 text-violet-700";

export function Projects() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    imageIndex: number;
  } | null>(null);

  return (
    <section id="projects" className="w-full px-4 mx-auto py-16 overflow-hidden">
      <h2
        className="text-3xl font-bold text-center mb-16 sm:text-4xl"
        data-aos="fade-up"
      >
        Projetos
      </h2>

      <div className="flex flex-col gap-20">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-10 items-center not-lg:grid-cols-1">
              <div
                className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100 border border-gray-200"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <ProjectsSwiper
                  images={project.images}
                  isFirstProject={index === 0}
                  onImageClick={(imageIndex) =>
                    setLightbox({ images: project.images, imageIndex })
                  }
                />
              </div>

              <div
                className="flex flex-col gap-4"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h3 className="text-2xl font-bold text-gray-800 not-sm:text-center">
                  {project.title}
                </h3>

                <p className="text-gray-500 italic leading-relaxed text-sm">
                  {project.shortDescription}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {project.badges && (
                  <ul className="flex flex-wrap gap-2 select-none">
                    {project.badges.map((badge) => (
                      <li
                        key={badge}
                        className={`px-3 py-1 rounded-full text-xs font-bold ${badgeStyle}`}
                      >
                        {badge}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="flex flex-wrap gap-2 text-sm text-gray-500 select-none">
                  {project.techs.map((tech, techIndex) => (
                    <li
                      key={tech}
                      className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full font-medium"
                      data-aos="zoom-in"
                      data-aos-delay={techIndex * 50}
                      data-aos-offset="0"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-4 not-sm:justify-center">
                  {project.linkProject !== "#" && (
                    <a
                      href={project.linkProject}
                      target="_blank"
                      className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition not-sm:w-full not-sm:text-center"
                    >
                      Ver projeto
                    </a>
                  )}

                  {project.linkRepo !== "#" && (
                    <a
                      href={project.linkRepo}
                      target="_blank"
                      className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-200 transition not-sm:w-full not-sm:text-center"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectLightbox
        key={lightbox?.images[0] ?? 'closed'}
        images={lightbox?.images ?? []}
        initialIndex={lightbox?.imageIndex ?? 0}
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
