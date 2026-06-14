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
}