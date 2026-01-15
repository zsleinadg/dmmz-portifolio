
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

export const englishtutorImages = [
  "/assets/Portifólio/EnglishTutor/Englishtutor1.png",
  "/assets/Portifólio/EnglishTutor/Englishtutor2.png",
  "/assets/Portifólio/EnglishTutor/Englishtutor3.png",
  "/assets/Portifólio/EnglishTutor/Englishtutor4.png",
  "/assets/Portifólio/EnglishTutor/Englishtutor5.png",
]

export const dalygamesImages = [
  "/assets/Portifólio/DalyGames/Dalygames1.png",
  "/assets/Portifólio/DalyGames/Dalygames2.png",
  "/assets/Portifólio/DalyGames/Dalygames3.png",
  "/assets/Portifólio/DalyGames/Dalygames4.png",
  "/assets/Portifólio/DalyGames/Dalygames5.png",
  
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
    description: "Plataforma SaaS de marketplace automotivo com sistema completo de anúncios. O projeto gerencia fluxos complexos como autenticação de usuários, persistência de dados em tempo real e storage para múltiplos arquivos. Implementa validações rigorosas de formulários e integração dinâmica com WhatsApp para conversão de leads.",
    techs: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Zod", "Hook Form"],
    images: webcarrosImages,
    linkProject: "https://web-carros-phi.vercel.app",
    linkRepo: "https://github.com/zsleinadg/WebCarros",
  },
  {
    id: 2,
    title: "LeiShop",
    description: "E-commerce dinâmico, que consome dados de uma API externa para listagem de produtos, focado em gerenciamento de estado e experiência do usuário. Implementa a lógica de carrinho de compras através da Context API, permitindo a manipulação de itens em tempo real, cálculo automático de totais e persistência de dados durante a sessão do usuário. O projeto destaca o domínio de Hooks e a navegação fluida entre rotas.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    images: leishopImages,
    linkProject: "https://lei-shop-green.vercel.app",
    linkRepo: "https://github.com/zsleinadg/LeiShop",
  },
  {
    id: 3,
    title: "English Tutor",
    description: "Plataforma de ensino personalizada que utiliza a API da Groq (LPU) para oferecer tutoria de inglês em tempo real com baixíssima latência. O sistema atua como um professor particular, fornecendo correções gramaticais instantâneas (correction), explicações contextuais (explanation) e sugestões de reescrita (better way). Inclui um motor de avaliação que gera um score de proficiência detalhado, analisando pontos fortes e áreas de melhoria a cada requisição, garantindo um ciclo de aprendizado contínuo e interativo.",
    techs: ["NextJS", "React", "TypeScript", "AI", "Groq", "Tailwind CSS"],
    images: englishtutorImages,
    linkProject: "https://english-tutor-theta.vercel.app",
    linkRepo: "https://github.com/zsleinadg/English-tutor",
  },
  {
    id: 4,
    title: "DalyGames",
    description: "Portal dinâmico de entretenimento que utiliza consumo de APIs externas para centralizar um vasto catálogo de jogos. Implementa um algoritmo de seleção aleatória automatizada para a 'Recomendação do Dia', promovendo a descoberta de novos títulos a cada acesso. O projeto foca em Server-Side Rendering (SSR) com Next.js para otimização de performance e SEO, entregando páginas de detalhes ricas em metadados e mídia.",
    techs: ["NextJS", "React", "TypeScript", "Tailwind CSS"],
    images: dalygamesImages,
    linkProject: "https://daly-games-smoky.vercel.app",
    linkRepo: "https://github.com/zsleinadg/DalyGames",
  },
];