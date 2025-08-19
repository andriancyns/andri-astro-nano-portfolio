import type { Site, Metadata, Socials } from "@types";
import { type Language } from "./i18n";

export const SITE: Site = {
  NAME: "Andrianto Cahyono Putro",
  EMAIL: "andriancyns@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export function getHomeMetadata(lang: Language): Metadata {
  const content = {
    en: {
      TITLE: "Andrian Cahyono | Software Engineer | Backend & Mobile Developer",
      DESCRIPTION: "Software Engineer specializing in backend (Go/Laravel) and mobile apps frontend (Android Java/Kotlin & Flutter). Builds backend-heavy, scalable, production-ready systems.",
    },
    id: {
      TITLE: "Andrian Cahyono | Software Engineer | Backend & Mobile Developer", 
      DESCRIPTION: "Software Engineer yang mengkhususkan diri dalam backend (Go/Laravel) dan frontend aplikasi mobile (Android Java/Kotlin & Flutter). Membangun sistem backend yang skalabel dan siap produksi.",
    }
  };
  
  return content[lang];
}

export function getBlogMetadata(lang: Language): Metadata {
  const content = {
    en: {
      TITLE: "Blog | Andrian Cahyono - Software Engineering & Tech Insights",
      DESCRIPTION: "Articles about software engineering, backend development, mobile app development, and technical experiences from a software engineer.",
    },
    id: {
      TITLE: "Blog | Andrian Cahyono - Software Engineering & Tech Insights",
      DESCRIPTION: "Artikel tentang software engineering, backend development, mobile app development, dan pengalaman teknis dari seorang software engineer.",
    }
  };
  
  return content[lang];
}

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export function getProjectsMetadata(lang: Language): Metadata {
  const content = {
    en: {
      TITLE: "Projects | Andrian Cahyono - Portfolio & Case Studies",
      DESCRIPTION: "Collection of software engineering projects: web applications, mobile apps, and backend systems built with modern technologies.",
    },
    id: {
      TITLE: "Proyek | Andrian Cahyono - Portfolio & Studi Kasus", 
      DESCRIPTION: "Kumpulan project software engineering: web applications, mobile apps, dan sistem backend yang telah saya kembangkan dengan teknologi modern.",
    }
  };
  
  return content[lang];
}

export const SOCIALS: Socials = [
  {
    NAME: "services",
    HREF: "https://andriancyns.notion.site/Build-Your-App-Fast-Functional-By-Andrian-23ce8a9af6de809db4dcf4b304277201",
  },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/andriancyns",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/andriancyns"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/andriancyns",
  },
  {
    NAME: "contra",
    HREF: "https://andriancyns.contra.com/",
  },
  {
    NAME: "dribbble",
    HREF: "https://dribbble.com/andriancyns",
  },
 
  
];
