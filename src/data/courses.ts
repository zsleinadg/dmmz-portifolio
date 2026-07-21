export interface CourseItemProps {
    title: string;
    school: string;
    status: "Concluído" | "Cursando";
}

export const courses: CourseItemProps[] = [
    { title: "Engenharia de Software", school: "UNIAMÉRICA", status: "Cursando" },
    { title: "Formação FullStack", school: "Hotmart", status: "Cursando" },
    { title: "Técnico em Informática", school: "IFCE", status: "Concluído" },
    { title: "Inglês Intermediário (Ênfase em T.I.)", school: "UECE", status: "Concluído" },
    { title: "Introdução a Python", school: "UECE", status: "Concluído" },
]