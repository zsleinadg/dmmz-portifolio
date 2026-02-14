import { ProjectType } from "@/types"

export const testepizzaria = [
  "/assets/projects/testepizzaria/img1.png",
  "/assets/projects/testepizzaria/img2.png",
  "/assets/projects/testepizzaria/img3.png",
  "/assets/projects/testepizzaria/img4.png",
  "/assets/projects/testepizzaria/img5.png",
  "/assets/projects/testepizzaria/img6.png",
  "/assets/projects/testepizzaria/img7.png",
  "/assets/projects/testepizzaria/img8.png",
]

export const webcarrosImages = [
  "/assets/projects/webcarros/img1.png",
  "/assets/projects/webcarros/img2.png",
  "/assets/projects/webcarros/img3.png",
  "/assets/projects/webcarros/img4.png",
  "/assets/projects/webcarros/img5.png",
  "/assets/projects/webcarros/img6.png",
  "/assets/projects/webcarros/img7.png",
  "/assets/projects/webcarros/img8.png",
]

export const leishopImages = [
  "/assets/projects/leishop/img1.png",
  "/assets/projects/leishop/img2.png",
  "/assets/projects/leishop/img3.png",
  "/assets/projects/leishop/img4.png",
  "/assets/projects/leishop/img5.png",
]

export const englishtutorImages = [
  "/assets/projects/englishtutor/img1.png",
  "/assets/projects/englishtutor/img2.png",
  "/assets/projects/englishtutor/img3.png",
  "/assets/projects/englishtutor/img4.png",
  "/assets/projects/englishtutor/img5.png",
]

export const dalygamesImages = [
  "/assets/projects/dalygames/img1.png",
  "/assets/projects/dalygames/img2.png",
  "/assets/projects/dalygames/img3.png",
  "/assets/projects/dalygames/img4.png",
  "/assets/projects/dalygames/img5.png",
]

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "TestePizzaria",
    description: "Ecossistema full-stack completo para gestão de pizzarias, composto por três frentes integradas: Backend, Web e Mobile. O sistema utiliza PostgreSQL e PrismaORM para persistência de dados e implementa um controle de acesso robusto (RBAC) com roles para ADMIN e STAFF. O painel Web permite o gerenciamento de produtos, categorias e fluxo de caixa, enquanto o aplicativo Mobile, desenvolvido especificamente para garçons via Expo, otimiza a criação de pedidos e a comunicação direta com a cozinha.",
    techs: ["NextJS", "React", "TypeScript", "Tailwind CSS", "React Native", "Expo", "PostgreSQL", "PrismaORM"],
    images: testepizzaria,
    linkProject: "#",
    linkRepo: "https://github.com/zsleinadg?tab=repositories",
  },
  {
    id: 2,
    title: "WebCarros",
    description: "Plataforma SaaS de marketplace automotivo com sistema completo de anúncios. O projeto gerencia fluxos complexos como autenticação de usuários, persistência de dados em tempo real e storage para múltiplos arquivos. Implementa validações rigorosas de formulários e integração dinâmica com WhatsApp para conversão de leads.",
    techs: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Zod", "Hook Form"],
    images: webcarrosImages,
    linkProject: "https://web-carros-phi.vercel.app",
    linkRepo: "https://github.com/zsleinadg/WebCarros",
  },
  {
    id: 3,
    title: "LeiShop",
    description: "E-commerce dinâmico, que consome dados de uma API externa para listagem de produtos, focado em gerenciamento de estado e experiência do usuário. Implementa a lógica de carrinho de compras através da Context API, permitindo a manipulação de itens em tempo real, cálculo automático de totais e persistência de dados durante a sessão do usuário. O projeto destaca o domínio de Hooks e a navegação fluida entre rotas.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    images: leishopImages,
    linkProject: "https://lei-shop-green.vercel.app",
    linkRepo: "https://github.com/zsleinadg/LeiShop",
  },
  {
    id: 4,
    title: "English Tutor",
    description: "Plataforma de ensino personalizada que utiliza a API da Groq (LPU) para oferecer tutoria de inglês em tempo real com baixíssima latência. O sistema atua como um professor particular, fornecendo correções gramaticais instantâneas (correction), explicações contextuais (explanation) e sugestões de reescrita (better way). Inclui um motor de avaliação que gera um score de proficiência detalhado, analisando pontos fortes e áreas de melhoria a cada requisição, garantindo um ciclo de aprendizado contínuo e interativo.",
    techs: ["NextJS", "React", "TypeScript", "AI", "Groq", "Tailwind CSS"],
    images: englishtutorImages,
    linkProject: "https://english-tutor-theta.vercel.app",
    linkRepo: "https://github.com/zsleinadg/English-tutor",
  },
  {
    id: 5,
    title: "DalyGames",
    description: "Portal dinâmico de entretenimento que utiliza consumo de APIs externas para centralizar um vasto catálogo de jogos. Implementa um algoritmo de seleção aleatória automatizada para a 'Recomendação do Dia', promovendo a descoberta de novos títulos a cada acesso. O projeto foca em Server-Side Rendering (SSR) com Next.js para otimização de performance e SEO, entregando páginas de detalhes ricas em metadados e mídia.",
    techs: ["NextJS", "React", "TypeScript", "Tailwind CSS"],
    images: dalygamesImages,
    linkProject: "https://daly-games-smoky.vercel.app",
    linkRepo: "https://github.com/zsleinadg/DalyGames",
  },
];