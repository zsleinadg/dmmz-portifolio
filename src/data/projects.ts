
export const webcarrosImages = [
  "/assets/Portifólio/WebCarros/Webcarros1.png",
  "/assets/Portifólio/WebCarros/Webcarros2.png",
  "/assets/Portifólio/WebCarros/Webcarros3.png",
  "/assets/Portifólio/WebCarros/Webcarros4.png",
  "/assets/Portifólio/WebCarros/Webcarros5.png",
  "/assets/Portifólio/WebCarros/Webcarros6.png",
  "/assets/Portifólio/WebCarros/Webcarros7.png",
  "/assets/Portifólio/WebCarros/Webcarros8.png",
]

export const leishopImages = [
  "/assets/Portifólio/LeiShop/Leishop1.png",
  "/assets/Portifólio/LeiShop/Leishop2.png",
  "/assets/Portifólio/LeiShop/Leishop3.png",
  "/assets/Portifólio/LeiShop/Leishop4.png",
  "/assets/Portifólio/LeiShop/Leishop5.png",
]

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  techs: string[];
  images: string[];
  linkProject: string;
  linkRepo: string;
}


export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "WebCarros",
    description: "O WebCarros é um sistema SaaS desenvolvido com foco em gestão e visualização de veículos. Possui autenticação completa, banco de dados em tempo real e armazenamento de imagens.",
    techs: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    images: webcarrosImages,
    linkProject: "https://web-carros-phi.vercel.app",
    linkRepo: "#",
  },
  {
    id: 2,
    title: "LeiShop",
    description: "Uma plataforma de e-commerce com carrinho de compras, detalhes dos produtos, utilizando ContextAPI.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    images: leishopImages,
    linkProject: "https://lei-shop-green.vercel.app",
    linkRepo: "#",
  },
];