export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedContent?: string; // HTML string for the readme content
  techStack: string[];
  link?: string;
  repoLink?: string;
  period: string;
  role?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  connection: string;
}