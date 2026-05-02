// Tipos de datos usados en todo el portafolio

/** Información personal del usuario */
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  photo: string;
  location: string;
  phone: string;
  email: string;
}

/** Idioma con porcentaje de dominio */
export interface Language {
  name: string;
  level: number; // 0-100
  flag: string;
}

/** Lenguaje de programación con porcentaje de dominio */
export interface ProgrammingLanguage {
  name: string;
  level: number; // 0-100
  icon: string;
}

/** Habilidad extra (blanda o dura) */
export interface Skill {
  name: string;
  icon: string;
}

/** Conocimiento / área de expertise */
export interface Knowledge {
  title: string;
  description: string;
  icon: string;
}

/** Entrada educativa */
export interface Education {
  institution: string;
  startDate: string;
  endDate: string;
  degree: string;
  description: string;
  icon: string;
  /** URL opcional a la credencial oficial (Trailhead, Credly, etc.) */
  credentialUrl?: string;
}

/** Proyecto del portafolio */
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Links adicionales a productos o páginas desarrolladas */
  additionalLinks?: { label: string; url: string }[];
}

/** Red social */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
