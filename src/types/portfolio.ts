export interface Profile {
  name: string;
  headlineTitle: string;
  headlineSub: string;
  summary: string;
  email: string;
  phone?: string;
  linkedInUrl: string;
  githubUrl: string;
  resumeUrl: string;
  profileImage?: string;
  location: string;
  openToRelocation: boolean;
  proofPoints: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  workMode: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  publicNotes?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  isPrimary?: boolean;
}

export interface ProjectMedia {
  type: 'image' | 'video' | 'diagram';
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status?: string;
  context: string;
  problem?: string;
  role: string;
  technicalApproach?: string[];
  difficultDecisions?: string[];
  results?: string[];
  technologies: string[];
  lessonsLearned?: string[];
  links?: ProjectLink[];
  media?: ProjectMedia[];
  hasInteractiveDemo?: boolean;
  codeSnippet?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface AboutInfo {
  bio: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
    highlights: string[];
  };
  languages: {
    name: string;
    proficiency: string;
  }[];
}
