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
  "/assets/projects/webcarros/img1.webp",
  "/assets/projects/webcarros/img2.webp",
  "/assets/projects/webcarros/img3.webp",
  "/assets/projects/webcarros/img4.webp",
  "/assets/projects/webcarros/img5.webp",
  "/assets/projects/webcarros/img6.webp",
  "/assets/projects/webcarros/img7.webp",
  "/assets/projects/webcarros/img8.webp",
  "/assets/projects/webcarros/img9.webp",
  "/assets/projects/webcarros/img10.webp",
  "/assets/projects/webcarros/img11.webp",
  "/assets/projects/webcarros/img12.webp",
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
    caseStudy: {
      problem: {
        text: [
          "SEMPRE achei horrível querer agendar algo em tal lugar e não saber se tem horário disponível, perguntar, conversar até achar um dia e horário que desse certo.",
          "Salões, barbearias e clínicas que gerenciam seu serviço de agenda no papel, planilhas ou WhatsApp, sofrem com choque de horários, faltas sem registro e possíveis erros em comissões calculadas manualmente em planilhas.",
          "O dono não tem visão de faturamento por profissional, não sabe qual o serviço mais lucrativo ou taxa de ocupação, decisões são no feeling, com perda de receita em horários ociosos.",
        ],
        bullets: ["Conflito de agendamentos", "Comissões manuais propensas a erro", "Sem métricas de desempenho", "ESTRESSE"],
        images: ["/assets/projects/leivices/img1.webp", "/assets/projects/leivices/img2.webp"],
      },
      solution: {
        text: [
          "Construí um SaaS multi-tenant com agendamento inteligente e bloqueio automático de conflitos, gestão de equipe com serviços e comissões por profissional, e painel analítico com Recharts.",
          "Dono faz login e cria seu salão, cadastra seus serviços e profissionais que fazem aqueles serviços, edita e ativa seu perfil e por fim compartilhja sua URL.",
          "Cliente vai lá e pá, pode achar o salão procurando por salões proximos dele, na região dele, ou via url personalizada que o dono do salão mandou.",
          "Cliente escolhe o serviço, o profissional, o dia e horário que quer, e pronto, agendamento feito. O dono do salão vê no painel de controle e tudo perfeito, sem estreesse desnecessário.",
        ],
        bullets: ["Bloqueio automático de conflitos", "Lista serviços e profissionais", "URL personalizada", "Métricas/Relatórios", "Posicionamento estratégico"],
        images: ["/assets/projects/leivices/img3.webp", "/assets/projects/leivices/img4.webp", "/assets/projects/leivices/img5.webp"],
      },
      architecture: {
        text: [
          "TÉCNICA: Next.js 16 App Router (server/client split) + TypeScript strict, PostgreSQL com Prisma ORM multi-tenant por tenantId, NextAuth com RBAC, Stripe para recorrência e webhooks, Cloudinary para mídia, Resend para e-mails, deploy Vercel.",
          "DESICIVA: Multi-Tenant para trabalhar com multiplos salões, NextAuth RBAC para OWNER/CLIENT, Stripe para monetização recorrente, TanStack React Query para sincronização de estado servidor, Zod + React Hook Form para validação de formulários.",
        ],
        bullets: ["Next.js + Prisma + PostgreSQL multi-tenant", "NextAuth RBAC", "Stripe webhooks", "TanStack React Query", "Zod + React Hook Form"],
        images: ["/assets/projects/leivices/img6.webp", "/assets/projects/leivices/img7.webp"],
      },
    },
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
    caseStudy: {
      problem: {
        text: [
          "É comum pizzarias perderem ou atrasarem pedidos no seu horário de pico devido ao garçom fazer as os pedidos manualmente, passar pra cozinha, ter que citar algum detalhe e etc.",
          "Acontece do garçom esquecer de passar algum detalhe do pedido, ou a cozinha bagunçar durante o preparo sem saber a ordem correta dos pedidos, causando atrasos e insatisfação do cliente.",
          "Conta não bate POR FALTA DE ORGANIZAÇÃO, e no final sai com dívida.",
        ],
        bullets: ["Pedidos perdidos no pico", "Problemas salão-cozinha", "Fechamento não bate"],
        images: ["/assets/projects/pizzaflow/img1.webp", "/assets/projects/pizzaflow/img2.webp"],
      },
      solution: {
        text: [
          "Ecossistema web + mobile: painel web para categorias, produtos e fluxo de caixa, e app mobile para garçons criarem pedidos na mesa com envio direto à cozinha.",
          "RBAC ADMIN/STAFF -> limita quem edita cardápio e fecha caixa.",
          "Tudo em UM só lugar, facilitando a visualizção.",
        ],
        bullets: ["Site e aplicativo", "Separação de Responsabilidades", "Fluxo de pedidos otimizado", "Controle de caixa"],
        images: ["/assets/projects/pizzaflow/img3.webp", "/assets/projects/pizzaflow/img4.webp"],
      },
      architecture: {
        text: [
          "Backend Node + Prisma + PostgreSQL, frontend Next.js, mobile React Native Expo compartilhando types TypeScript. Auth com roles, validação server-side, deploy Vercel + build Expo.",
          "Decisão: monorepo lógico com contratos REST compartilhados para manter web e mobile sincronizados sem duplicar regra de negócio.",
        ],
        bullets: ["REST compartilhado web/mobile", "Prisma migrations", "Expo EAS"],
        images: ["/assets/projects/pizzaflow/img5.webp", "/assets/projects/pizzaflow/img6.webp"],
      },
    },
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
    caseStudy: {
      problem: {
        text: [
          "FICTÍCIO: Condomínio de alto padrão precisava de presença digital que transmitisse exclusividade, mas tinha apenas fotos soltas e texto genérico, além de estar mal posicionado no Google.",
        ],
        bullets: ["Baixa perceived value", "Falta de narrativa de valor", "sem presença digital"],
        images: ["/assets/projects/lakevillagelp/img1.webp"],
      },
      solution: {
        text: [
          "Prototipei no Figma com IA + ChatGPT para paleta, tipografia, composição e design inicial. Testei variações de header e hero, e implementei o projeto criando uma landing responsivo e com animações sutis para o local.",
        ],
        bullets: ["Design system no Figma", "Variações A/B de hero", "Responsivo mobile-first"],
        images: ["/assets/projects/lakevillagelp/img2.webp", "/assets/projects/lakevillagelp/img3.webp"],
      },
      architecture: {
        text: [
          "Vite + React + TypeScript + Tailwind, componentes puros, assets otimizados WebP, deploy Vercel. Sem backend — foco em performance e CLS.",
        ],
        bullets: ["Vite build", "WebP", "Lighthouse-first"],
        images: ["/assets/projects/lakevillagelp/img4.webp"],
      },
    },
  },
  {
    id: 4,
    title: "WebCarros",
    shortDescription: "Marketplace automotivo com autenticação Supabase e integração WhatsApp.",
    description: "Marketplace automotivo completo construído com React e TypeScript. O sistema conta com autenticação via Supabase, dashboard do vendedor para gerenciar anúncios com upload de múltiplas imagens, validação de formulários com Zod e React Hook Form, e integração dinâmica com WhatsApp para conversão de leads. O projeto inclui páginas públicas (Home com vitrine interativa, catálogo com filtros avançados, detalhes do veículo, test-drive e venda) e área logada com dashboard completo para gestão de anúncios e favoritos persistentes. Tudo construído com React Router, Radix UI e PostgreSQL em tempo real.",
    techs: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "Zod", "React Hook Form", "Radix UI", "React Router"],
    images: webcarrosImages,
    linkProject: "https://web-carros-phi.vercel.app",
    linkRepo: "https://github.com/zsleinadg/WebCarros",
    badges: ["Full-Stack", "SaaS"],
    caseStudy: {
      problem: {
        text: [
          "FICTÍCIO: Vendedores de carros (e motos) apenas anunciam em grupos de WhatsApp sem vitrine, filtros ou gestão, e os clientes se perdiam, além das fotos ficarem espalhadas.",
          "Sem controle de usuários interessados, sem portfólio para seus produtos, sem automatização, sem perfil ou presença digital.",
        ],
        bullets: ["Anúncios desorganizados", "Sem portfólio", "Conversão manual"],
        images: ["/assets/projects/webcarros/img1.webp", "/assets/projects/webcarros/img2.webp"],
      },
      solution: {
        text: [
          "Desenvolvi um Marketplace com vitrine, catálogo com filtros avançados, detalhe do veículo, dashboard do vendedor com upload múltiplo e favoritos persistentes. Integração WhatsApp gera lead com mensagem pronta do anúncio.",
          "Centralização de anúncios, gestão de leads e presença digital para vendedores, com experiência fluida para clientes.",
          "Interface e experiência (UI/UX) atrativas para os clientes.",
        ],
        bullets: ["Supabase Auth + Storage realtime", "Zod + RHF", "WhatsApp deep-link por anúncio"],
        images: ["/assets/projects/webcarros/img3.webp", "/assets/projects/webcarros/img4.webp"],
      },
      architecture: {
        text: [
          "React + Vite + TypeScript, Supabase (Postgres realtime, Auth, Storage), Radix UI, deploy Vercel. Storage com múltiplos arquivos por anúncio e RLS por vendedor.",
        ],
        bullets: ["Supabase BaaS", "RLS por usuário", "Realtime Postgres"],
        images: ["/assets/projects/webcarros/img5.webp"],
      },
    },
  },
  // {
  //   id: 5,
  //   title: "LeiShop",
  //   shortDescription: "E-commerce dinâmico com carrinho Context API e consumo de API externa.",
  //   description: "E-commerce dinâmico, que consome dados de uma API externa para listagem de produtos, focado em gerenciamento de estado e experiência do usuário. Implementa a lógica de carrinho de compras através da Context API, permitindo a manipulação de itens em tempo real, cálculo automático de totais e persistência de dados durante a sessão do usuário. O projeto destaca o domínio de Hooks e a navegação fluida entre rotas.",
  //   techs: ["React", "TypeScript", "Tailwind CSS", "Context API"],
  //   images: leishopImages,
  //   linkProject: "https://lei-shop-green.vercel.app",
  //   linkRepo: "https://github.com/zsleinadg/LeiShop",
  //   badges: ["Front-End", "E-commerce"],
  // },
  // {
  //   id: 6,
  //   title: "DalyGames",
  //   shortDescription: "Catálogo de jogos com SSR, SEO e recomendação diária automatizada.",
  //   description: "Portal dinâmico de entretenimento que utiliza consumo de APIs externas para centralizar um vasto catálogo de jogos. Implementa um algoritmo de seleção aleatória automatizada para a 'Recomendação do Dia', promovendo a descoberta de novos títulos a cada acesso. O projeto foca em Server-Side Rendering (SSR) com Next.js para otimização de performance e SEO, entregando páginas de detalhes ricas em metadados e mídia.",
  //   techs: ["NextJS", "React", "TypeScript", "Tailwind CSS"],
  //   images: dalygamesImages,
  //   linkProject: "https://daly-games-smoky.vercel.app",
  //   linkRepo: "https://github.com/zsleinadg/DalyGames",
  //   badges: ["Front-End", "Entretenimento"],
  // },
];