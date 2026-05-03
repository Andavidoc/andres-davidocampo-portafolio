// Datos del portafolio de Andrés David Ocampo
// Última actualización: Mayo 2026

import {
  PersonalInfo,
  Language,
  ProgrammingLanguage,
  Skill,
  Knowledge,
  Education,
  Project,
  SocialLink,
} from '@/types';

/** Información personal */
export const personalInfo: PersonalInfo = {
  name: 'Andrés David Ocampo',
  title: 'Salesforce Developer Sr. | Estudiante de Ingeniería de Sistemas',
  bio: 'Profesional de TI con 4 años de experiencia trabajando bajo metodologías ágiles. Especializado en desarrollo Salesforce, entregando soluciones de impacto con Apex, Lightning Web Components (LWC) y Flows. Proactivo, con sólidas habilidades de trabajo en equipo, comunicación y resolución de problemas.',
  photo: '/profile.jpg',
  location: 'Medellín, Colombia',
  phone: '+57 3205855777',
  email: 'andresarca65@gmail.com',
};

/** Idiomas */
export const languages: Language[] = [
  { name: 'Español', level: 100, flag: '🇨🇴' },
  { name: 'Inglés (B2)', level: 75, flag: '🇺🇸' },
];

/** Lenguajes de programación y tecnologías */
export const programmingLanguages: ProgrammingLanguage[] = [
  { name: 'Apex (Salesforce)', level: 92, icon: 'logos:salesforce' },
  { name: 'LWC', level: 88, icon: 'mdi:lightning-bolt' },
  { name: 'SOQL / SOSL', level: 85, icon: 'mdi:database-search' },
  { name: 'JavaScript', level: 78, icon: 'logos:javascript' },
  { name: 'OmniStudio / Vlocity', level: 80, icon: 'mdi:cloud-outline' },
  { name: 'API REST', level: 75, icon: 'mdi:api' },
];

/** Habilidades extra */
export const skills: Skill[] = [
  { name: 'CI/CD (Jenkins / Azure)', icon: 'mdi:infinity' },
  { name: 'Metodologías ágiles (Scrum)', icon: 'mdi:lightning-bolt' },
  { name: 'Salesforce Admin', icon: 'logos:salesforce' },
  { name: 'Einstein Bots', icon: 'mdi:robot-outline' },
  { name: 'GitHub Copilot', icon: 'mdi:github' },
  { name: 'Trabajo en equipo', icon: 'mdi:account-group' },
  { name: 'Financial Services Cloud', icon: 'mdi:bank-outline' },
  { name: 'Industries Cloud', icon: 'mdi:cloud-outline' },
];

/** Conocimientos técnicos */
export const knowledge: Knowledge[] = [
  {
    title: 'Salesforce Development',
    description:
      'Desarrollo de Apex classes, Triggers, Flows y LWC para potenciar la funcionalidad de la plataforma. Experiencia en Sales Cloud, Service Cloud y Financial Services Cloud.',
    icon: 'logos:salesforce',
  },
  {
    title: 'Lightning Web Components',
    description:
      'Construcción de componentes modernos con LWC, gestión de eventos, comunicación entre componentes y consumo de APIs REST desde Salesforce.',
    icon: 'mdi:lightning-bolt',
  },
  {
    title: 'OmniStudio / Vlocity',
    description:
      'Implementación de DataRaptors, Integration Procedures y OmniScripts para soluciones en Financial Services Cloud e Industries Cloud.',
    icon: 'mdi:cloud-outline',
  },
  {
    title: 'CI/CD & DevOps',
    description:
      'Implementación de pipelines de despliegue continuo con Jenkins y Azure DevOps. Aseguramiento de calidad en deployments de Salesforce con procesos automatizados.',
    icon: 'mdi:infinity',
  },
  {
    title: 'Integraciones & API REST',
    description:
      'Integración de sistemas externos con Salesforce mediante Named Credentials, Apex callouts y REST APIs. Monitoreo y resolución de fallos en integraciones críticas.',
    icon: 'mdi:api',
  },
  {
    title: 'Einstein Bots & AI',
    description:
      'Configuración de Einstein Bots para automatización de atención al cliente. Uso de herramientas de IA como GitHub Copilot para optimizar escritura y documentación de código.',
    icon: 'mdi:robot-outline',
  },
];

/** Historial educativo y certificaciones */
export const education: Education[] = [
  {
    institution: 'Universidad de Antioquia',
    startDate: 'Oct. 2018',
    endDate: 'Jun. 2028',
    degree: 'Ingeniería de Sistemas',
    description:
      'Programa de pregrado con énfasis en desarrollo de software, estructuras de datos, algoritmos, bases de datos y arquitectura de sistemas.',
    icon: 'mdi:school',
  },
  {
    institution: 'Salesforce Trailhead',
    startDate: 'Sep. 2022',
    endDate: 'Sep. 2022',
    degree: 'Salesforce Certified Platform Developer I',
    description:
      'Certificación que valida conocimientos avanzados en desarrollo sobre la plataforma Force.com, incluyendo Apex, SOQL y LWC.',
    icon: 'logos:salesforce',
    credentialUrl: 'https://www.salesforce.com/trailblazer/andavidoc', 
  },
  {
    institution: 'Salesforce Trailhead',
    startDate: 'Oct. 2022',
    endDate: 'Oct. 2022',
    degree: 'Salesforce Certified Administrator',
    description:
      'Certificación que acredita habilidades en administración de Salesforce: configuración, seguridad, automatización y gestión de datos.',
    icon: 'logos:salesforce',
    credentialUrl: 'https://www.salesforce.com/trailblazer/andavidoc', 
  },
  {
    institution: 'Salesforce Trailhead',
    startDate: 'May. 2023',
    endDate: 'May. 2023',
    degree: 'Salesforce Certified Associate',
    description:
      'Certificación de nivel asociado que valida conocimiento general del ecosistema Salesforce y sus capacidades de plataforma.',
    icon: 'logos:salesforce',
    credentialUrl: 'https://www.salesforce.com/trailblazer/andavidoc', 
  },
];

/**
 * Proyectos / Experiencia laboral.
 * Se usan las empresas como proyectos destacados con sus páginas web oficiales.
 */
export const projects: Project[] = [
  {
    id: 'globant',
    title: 'Globant — BCP Cards',
    shortDescription:
      'Desarrollo Salesforce para BCP, uno de los bancos más grandes de Latinoamérica. Apex, LWC y Flows con CI/CD en Jenkins.',
    fullDescription:
      'En Globant (Nov. 2025 – Presente) trabajo como Salesforce Developer para el cliente BCP (Banco de Crédito del Perú) en el squad de Cards. Las responsabilidades incluyen el desarrollo y mantenimiento de Apex classes, Flows y Lightning Web Components, implementación de CI/CD con Jenkins y uso de GitHub Copilot para optimizar la documentación y escritura de código dentro de equipos Agile.',
    image: '/projects/globant.jpg',
    technologies: ['Apex', 'LWC', 'Flows', 'Jenkins', 'GitHub Copilot', 'Jira'],
    liveUrl: 'https://www.globant.com/es',
  },
  {
    id: 'nttdata',
    title: 'NTT DATA — Financial Services Cloud',
    shortDescription:
      'Funcionalidades FSC con OmniStudio (DataRaptors, Integration Procedures) e integraciones con Azure.',
    fullDescription:
      'En NTT DATA (Sep. 2023 – Nov. 2025) trabajé como Salesforce Developer implementando funcionalidades de Financial Services Cloud usando OmniStudio: DataRaptors, Integration Procedures y configuraciones avanzadas. También fui responsable del monitoreo y resolución de fallos en integraciones del sistema, participando activamente en ceremonias Agile para alinear los entregables técnicos con los requerimientos del negocio.',
    image: '/projects/nttdata.png',
    technologies: ['OmniStudio', 'Vlocity', 'Azure', 'Apex', 'LWC', 'SOQL'],
    liveUrl: 'https://co.nttdata.com/',
    additionalLinks: [
      { label: 'SURA Colombia', url: 'https://www.sura.co' },
      { label: 'Cotizador Hogar Arriendo', url: 'https://ecomm.sura.co/seguros/hogar/arriendo/cotizador' },
      { label: 'Cotizador Autos', url: 'https://ecomm.sura.co/seguros/movilidad/autos/cotizador' },
      { label: 'Cotizador Motos', url: 'https://ecomm.sura.co/seguros/movilidad/motos/cotizador' },
      { label: 'Cotizador Viajes', url: 'https://ecomm.sura.co/seguros/salud/viajes/cotizador' },
    ],
  },
  {
    id: 'evolution',
    title: 'Evolution — Salesforce Development',
    shortDescription:
      'Administración de Salesforce y desarrollo de Apex y LWC para mantenimiento de lógica de negocio crítica.',
    fullDescription:
      'En Evolution (May. 2022 – Jul. 2023) gestioné la administración de la plataforma Salesforce y el desarrollo de Apex y LWC. Me adapté rápidamente a nuevas funcionalidades de la plataforma, contribuyendo al mantenimiento exitoso de la lógica de negocio principal de la empresa.',
    image: '/projects/evolution.jpg',
    technologies: ['Apex', 'LWC', 'Salesforce Admin', 'Flows'],
    liveUrl: 'https://github.com/Andavidoc/AirVolution',
    additionalLinks: [
      { label: 'Portal Registro Clientes', url: 'http://e-volution-e-dev-ed.develop.my.salesforce-sites.com/trabajaconnosotros/registroCliente' },
      { label: 'Portal Trabaja con Nosotros', url: 'http://e-volution-e-dev-ed.develop.my.salesforce-sites.com/trabajaconnosotros' },
    ],
  },
  {
    id: 'portafolio',
    title: 'Portafolio Personal',
    shortDescription:
      'Portafolio web desarrollado con NextJS, TypeScript y TailwindCSS como proyecto universitario.',
    fullDescription:
      'Portafolio personal desarrollado para la materia Ingeniería Web de la Universidad de Antioquia. Implementa Atomic Design con componentes reutilizables, dark mode, animaciones CSS, modales interactivos y scroll horizontal. Desplegado en Vercel.',
    image: '/projects/udea.jpg',
    technologies: ['NextJS', 'TypeScript', 'TailwindCSS', 'Vercel'],
    liveUrl: 'https://andres-davidocampo.vercel.app',
    additionalLinks: [
      { label: 'Repositorio Portafolio Inge-Web', url: 'https://github.com/202601-Ingenieria-Web/Andres-DavidOcampo-Portafolio' },
      { label: 'Repositorio Portafolio Personal', url: 'https://github.com/Andavidoc/andres-davidocampo-portafolio' },
    ],
  },
];

/** Redes sociales */
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Andavidoc',
    icon: 'mdi:github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/Andavidoc',
    icon: 'mdi:linkedin',
  },
  {
    name: 'Trailhead',
    url: 'https://www.salesforce.com/trailblazer/andavidoc',
    icon: 'simple-icons:salesforce',
  },
];
