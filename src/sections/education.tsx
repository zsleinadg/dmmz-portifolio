import { courses } from "@/data/courses";

export function Education() {
  return (
    <section id="education" className="bg-background py-24">
      <div className="max-w-310 mx-auto px-10 max-md:px-5">
        <div className="mb-12">
          <h2
            className="text-[clamp(28px,4vw,38px)] not-md:text-center font-bold text-foreground tracking-tight leading-tight"
            data-aos="fade-up"
          >
            Formação e Cursos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <div className="h-full p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all group">
      <div className="flex justify-between items-start gap-3 mb-2">
        <h3 className="font-bold text-foreground group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <span
          className={`shrink-0 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md ${
            course.status === "Concluído"
              ? "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800"
              : "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-500/50"
          }`}
        >
          {course.status}
        </span>
      </div>
      <p className="text-muted-foreground text-sm font-medium">{course.school}</p>
    </div>
  );
}
