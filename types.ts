
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
   figmaLink: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
} 

export type Theme = 'light' | 'dark';
