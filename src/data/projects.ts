import { ProjectType } from "@/types"

export const leivicesImages = [
  "/assets/projects/leivices/img1.webp",
  "/assets/projects/leivices/img2.webp",
  "/assets/projects/leivices/img3.webp",
  "/assets/projects/leivices/img4.webp",
  "/assets/projects/leivices/img5.webp",
  "/assets/projects/leivices/img6.webp",
  "/assets/projects/leivices/img7.webp",
  "/assets/projects/leivices/img8.webp",
  "/assets/projects/leivices/img9.webp",
  "/assets/projects/leivices/img10.webp",
  "/assets/projects/leivices/img11.webp",
  "/assets/projects/leivices/img12.webp",
]

export const pizzaflowImages = [
  "/assets/projects/pizzaflow/img1.webp",
  "/assets/projects/pizzaflow/img2.webp",
  "/assets/projects/pizzaflow/img3.webp",
  "/assets/projects/pizzaflow/img4.webp",
  "/assets/projects/pizzaflow/img5.webp",
  "/assets/projects/pizzaflow/img6.webp",
  "/assets/projects/pizzaflow/img7.webp",
  "/assets/projects/pizzaflow/img8.webp",
  "/assets/projects/pizzaflow/img9.webp",
  "/assets/projects/pizzaflow/img10.webp",
  "/assets/projects/pizzaflow/img11.webp",
  "/assets/projects/pizzaflow/img12.webp",
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

export const lakevillagelpImages = [
  "/assets/projects/lakevillagelp/img1.webp",
  "/assets/projects/lakevillagelp/img2.webp",
  "/assets/projects/lakevillagelp/img3.webp",
  "/assets/projects/lakevillagelp/img4.webp",
  "/assets/projects/lakevillagelp/img5.webp",
  "/assets/projects/lakevillagelp/img6.webp",
  "/assets/projects/lakevillagelp/img7.webp",
  "/assets/projects/lakevillagelp/img8.webp",
]

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Leivices - Agendamentos Online e Gerenciamento de Salões",
    shortDescription: "SaaS multi-inquilino para agendamento online e gestão de salões com Stripe, analytics e autenticação.",
    description: "SaaS multi-inquilino completo para salões de beleza, barbearias e clínicas de estética, desenvolvido com arquitetura moderna e escalável. O sistema oferece agendamento inteligente com bloqueio automático de conflitos, gestão de equipe com atribuição de serviços e comissões por profissional, além de um painel analítico avançado com gráficos interativos (Recharts) e métricas detalhadas de desempenho. Implementa autenticação segura via NextAuth com controle de acesso baseado em perfis (OWNER/CLIENT), assinaturas recorrentes gerenciadas pelo Stripe com planos progressivos, upload otimizado de mídias com Cloudinary, notificações transacionais via Resend e geração de recibos em PDF. Tudo sustentado por uma stack robusta com TanStack React Query para sincronização de estado servidor e formulários validados com Zod + React Hook Form.",
    techs: ["NextJS", "TypeScript", "PostgreSQL", "PrismaORM", "Stripe", "TailwindCSS", "NextAuth", "React Hook Form", "TanStack React Query", "Recharts"],
    images: leivicesImages,
    linkProject: "https://leivices.com.br",
    linkRepo: "#",
    badges: ["Full-Stack", "SaaS"],
  },
  {
    id: 2,
    title: "PizzaFlow",
    shortDescription: "Ecossistema full-stack (Web + Mobile) para gestão de pizzarias com RBAC.",
    description: "Ecossistema full-stack completo para gestão de pizzarias, composto por três frentes integradas: Backend, Web e Mobile. O sistema utiliza PostgreSQL e PrismaORM para persistência de dados e implementa um controle de acesso robusto (RBAC) com roles para ADMIN e STAFF. O painel Web permite o gerenciamento de produtos, categorias e fluxo de caixa, enquanto o aplicativo Mobile, desenvolvido especificamente para garçons via Expo, otimiza a criação de pedidos e a comunicação direta com a cozinha. Credenciais de teste: admin@pizzaflow.com / Admin@123",
    techs: ["NextJS", "React", "TypeScript", "Tailwind CSS", "React Native", "Expo", "PostgreSQL", "PrismaORM"],
    images: pizzaflowImages,
    linkProject: "https://pizzaria-frontend.vercel.app",
    linkRepo: "https://github.com/zsleinadg/pizzaria-backend",
    badges: ["Full-Stack", "Mobile"],
  },
  {
    id: 3,
    title: "LakeVillage LP",
    shortDescription: "Landing page moderna para condomínio residencial com lago privativo, explorando variações de design e layout.",
    description: "Landing page institucional para o condomínio Lake Village, desenvolvida como estudo de design e prototipação. O projeto foi concebido no Figma com auxílio de ferramentas de IA para refinar paleta de cores, tipografia e composição visual, resultando em uma interface sofisticada e alinhada ao mercado imobiliário. Foram exploradas múltiplas variações de componentes (como headers e hero sections) para avaliar diferentes abordagens visuais. Desenvolvida com React e Tailwind CSS, entregando uma experiência responsiva e de alta fidelidade ao design proposto.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    images: lakevillagelpImages,
    linkProject: "https://lake-village-lp.vercel.app",
    linkRepo: "https://github.com/zsleinadg/lake-village-lp",
    badges: ["Front-End", "Landing Page"],
  },
  {
    id: 4,
    title: "WebCarros",
    shortDescription: "Marketplace automotivo com autenticação Supabase e integração WhatsApp.",
    description: "Plataforma SaaS de marketplace automotivo com sistema completo de anúncios. O projeto gerencia fluxos complexos como autenticação de usuários, persistência de dados em tempo real e storage para múltiplos arquivos. Implementa validações rigorosas de formulários e integração dinâmica com WhatsApp para conversão de leads.",
    techs: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Zod", "Hook Form"],
    images: webcarrosImages,
    linkProject: "https://web-carros-phi.vercel.app",
    linkRepo: "https://github.com/zsleinadg/WebCarros",
    badges: ["Full-Stack", "SaaS"],
  },
  {
    id: 5,
    title: "LeiShop",
    shortDescription: "E-commerce dinâmico com carrinho Context API e consumo de API externa.",
    description: "E-commerce dinâmico, que consome dados de uma API externa para listagem de produtos, focado em gerenciamento de estado e experiência do usuário. Implementa a lógica de carrinho de compras através da Context API, permitindo a manipulação de itens em tempo real, cálculo automático de totais e persistência de dados durante a sessão do usuário. O projeto destaca o domínio de Hooks e a navegação fluida entre rotas.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    images: leishopImages,
    linkProject: "https://lei-shop-green.vercel.app",
    linkRepo: "https://github.com/zsleinadg/LeiShop",
    badges: ["Front-End", "E-commerce"],
  },
  {
    id: 6,
    title: "DalyGames",
    shortDescription: "Catálogo de jogos com SSR, SEO e recomendação diária automatizada.",
    description: "Portal dinâmico de entretenimento que utiliza consumo de APIs externas para centralizar um vasto catálogo de jogos. Implementa um algoritmo de seleção aleatória automatizada para a 'Recomendação do Dia', promovendo a descoberta de novos títulos a cada acesso. O projeto foca em Server-Side Rendering (SSR) com Next.js para otimização de performance e SEO, entregando páginas de detalhes ricas em metadados e mídia.",
    techs: ["NextJS", "React", "TypeScript", "Tailwind CSS"],
    images: dalygamesImages,
    linkProject: "https://daly-games-smoky.vercel.app",
    linkRepo: "https://github.com/zsleinadg/DalyGames",
    badges: ["Front-End", "Entretenimento"],
  },
];