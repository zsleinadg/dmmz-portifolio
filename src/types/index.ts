export interface CaseSection {
  text: string[];
  images?: string[];
  bullets?: string[];
}

export interface CaseStudy {
  problem: CaseSection;
  solution: CaseSection;
  architecture: CaseSection;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  techs: string[];
  images: string[];
  linkProject: string;
  linkRepo: string;
  badges?: string[];
  caseStudy?: CaseStudy;
}