export interface CourseItemProps {
    title: string;
    school: string;
    status: "Concluído" | "Cursando";
}

export const courses: CourseItemProps[] = [
    { title: "Formação FullStack", school: "Sujeito Programador", status: "Cursando" },
    { title: "Técnico em Informática", school: "IFCE", status: "Cursando" },
    { title: "Inglês Intermediário (Ênfase em T.I.)", school: "UECE", status: "Concluído" },
    { title: "Introdução a Python", school: "UECE", status: "Concluído" },
]