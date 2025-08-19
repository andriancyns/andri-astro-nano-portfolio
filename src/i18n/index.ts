export const languages = {
  en: 'English',
  id: 'Bahasa Indonesia'
};

export const defaultLang = 'id';
export const fallbackLang = 'en';

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui): string {
    return ui[key][lang] || ui[key][defaultLang] || key;
  }
}

export const ui = {
  'nav.home': {
    en: 'Home',
    id: 'Beranda',
  },
  'nav.blog': {
    en: 'Blog',
    id: 'Blog',
  },
  'nav.projects': {
    en: 'Projects', 
    id: 'Proyek',
  },
  'nav.work': {
    en: 'Work',
    id: 'Pekerjaan',
  },
  'home.title': {
    en: 'Andrian Cahyono | Software Engineer | Backend & Mobile Developer',
    id: 'Andrian Cahyono | Software Engineer | Backend & Mobile Developer',
  },
  'home.description': {
    en: 'Software Engineer specializing in backend (Go/Laravel) and mobile apps frontend (Android Java/Kotlin & Flutter). Builds backend-heavy, scalable, production-ready systems.',
    id: 'Software Engineer yang mengkhususkan diri dalam backend (Go/Laravel) dan frontend aplikasi mobile (Android Java/Kotlin & Flutter). Membangun sistem backend yang skalabel dan siap produksi.',
  },
  'home.greeting': {
    en: "Hi, I'm Andrian",
    id: 'Halo, saya Andrian',
  },
  'home.intro': {
    en: "I'm here to build systems that work clean, scalable, and ready for production. You bring the problem, I'll design the solution from backend to frontend, from brief to deployment.",
    id: 'Saya di sini untuk membangun sistem yang bersih, skalabel, dan siap produksi. Anda bawa masalahnya, saya akan desain solusinya dari backend ke frontend, dari brief sampai deployment.',
  },
  'home.recent_projects': {
    en: 'Recent projects',
    id: 'Proyek terbaru',
  },
  'home.latest_posts': {
    en: 'Latest posts', 
    id: 'Artikel terbaru',
  },
  'home.see_all_projects': {
    en: 'See all projects',
    id: 'Lihat semua proyek',
  },
  'home.see_all_posts': {
    en: 'See all posts',
    id: 'Lihat semua artikel',
  },
  'home.connect': {
    en: "Let's Connect",
    id: 'Mari Terhubung',
  },
  'home.connect_text': {
    en: 'If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.',
    id: 'Jika ingin berdiskusi tentang sesuatu atau sekadar menyapa, hubungi saya melalui media sosial atau kirim email.',
  },
  'home.download_resume': {
    en: 'download my resume',
    id: 'unduh resume saya',
  },
  'blog.title': {
    en: 'Blog | Andrian Cahyono - Software Engineering & Tech Insights',
    id: 'Blog | Andrian Cahyono - Software Engineering & Tech Insights',
  },
  'blog.description': {
    en: 'Articles about software engineering, backend development, mobile app development, and technical experiences from a software engineer.',
    id: 'Artikel tentang software engineering, backend development, mobile app development, dan pengalaman teknis dari seorang software engineer.',
  },
  'blog.back_to_blog': {
    en: 'Back to blog',
    id: 'Kembali ke blog',
  },
  'projects.title': {
    en: 'Projects | Andrian Cahyono - Portfolio & Case Studies',
    id: 'Proyek | Andrian Cahyono - Portfolio & Studi Kasus',
  },
  'projects.description': {
    en: 'Collection of software engineering projects: web applications, mobile apps, and backend systems built with modern technologies.',
    id: 'Kumpulan project software engineering: web applications, mobile apps, dan sistem backend yang telah saya kembangkan dengan teknologi modern.',
  },
  'projects.back_to_projects': {
    en: 'Back to projects',
    id: 'Kembali ke proyek',
  },
  'common.demo': {
    en: 'demo',
    id: 'demo',
  },
  'common.repo': {
    en: 'repo',
    id: 'repo',
  },
  'common.views': {
    en: 'views',
    id: 'tayangan',
  },
  'common.min_read': {
    en: 'min read',
    id: 'menit baca',
  },
  'lang.switch_to_en': {
    en: 'English',
    id: 'English',
  },
  'lang.switch_to_id': {
    en: 'Bahasa Indonesia',
    id: 'Bahasa Indonesia',
  },
} as const;