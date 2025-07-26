import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Andrianto Cahyono Putro",
  EMAIL: "andriancyns@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Andrianto Cahyono Putro - Home",
  DESCRIPTION: "Software Engineer specializing in backend (Go/Laravel) and mobile apps frontend (Android Java/Kotlin & Flutter). Builds backend-heavy, scalable, production-ready systems.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
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
