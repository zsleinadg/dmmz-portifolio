import {
  SiJest,
  SiGithubactions,
  SiSwagger,
  SiDocker,
  SiStripe,
  SiCloudinary,
  SiPostman,
} from "react-icons/si";
import { Bot, Workflow, Mail, ShieldCheck, FileCode2, Zap } from "lucide-react";
import type { ComponentType } from "react";

export type ToolIcon = ComponentType<{ size?: number | string; className?: string }>;
export type ToolLevel = "Produção" | "Prática Contínua";

export interface ToolItem {
  name: string;
  icon: ToolIcon;
  color: string;
  level: ToolLevel;
  proof?: string;
}

export interface ToolGroup {
  id: string;
  title: string;
  description: string;
  tools: ToolItem[];
}

export const toolGroups: ToolGroup[] = [
  {
    id: "devops-quality",
    title: "Testes, CI/CD & Documentação de APIs",
    description: "Garantia de qualidade, testes automatizados e contratos de API padronizados.",
    tools: [
      { name: "Jest", icon: SiJest, color: "#C21325", level: "Prática Contínua", proof: "Testes unitários" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#A1A1AA", level: "Prática Contínua", proof: "Pipelines de CI" },
      { name: "Swagger / OpenAPI", icon: SiSwagger, color: "#85EA2D", level: "Produção", proof: "Contratos de API" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "Produção", proof: "Testes de integração" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: "Prática Contínua", proof: "Conteinerização" },
    ],
  },
  {
    id: "integrations",
    title: "Ecossistema SaaS & Automações",
    description: "Integração de serviços de terceiros e orquestração de dados em produção.",
    tools: [
      { name: "Stripe", icon: SiStripe, color: "#635BFF", level: "Produção", proof: "Pagamentos" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5", level: "Produção", proof: "Gestão de mídia" },
      { name: "Resend", icon: Mail, color: "#A1A1AA", level: "Produção", proof: "E-mails transacionais" },
      { name: "n8n", icon: Workflow, color: "#EA4B71", level: "Produção", proof: "Pipelines & ETL" },
      { name: "LLMs", icon: Bot, color: "#7C3AED", level: "Produção", proof: "Processamento de dados" },
    ],
  },
];

export const workflowImages = [
  "/assets/tooling/1.webp",
  "/assets/tooling/5.webp",
  "/assets/tooling/4.webp",
  "/assets/tooling/3.webp",
  "/assets/tooling/2.webp",
];

export const aiWorkflow = [
  {
    icon: FileCode2,
    title: "Boilerplate e Testes Assistidos",
    description: "Uso de LLMs para agilizar esqueletos de código e cenários de teste em Jest, com validação manual obrigatória de edge cases antes do commit.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & Privacidade",
    description: "Prompts versionados e isolados. Dados sensíveis, segredos de produção e regras de negócio de clientes nunca são expostos a provedores externos.",
  },
  {
    icon: Zap,
    title: "Automação com n8n + LLMs",
    description: "Orquestração de chamadas de baixa latência em fluxos do n8n para sumarização, classificação e processamento assíncrono.",
  },
];