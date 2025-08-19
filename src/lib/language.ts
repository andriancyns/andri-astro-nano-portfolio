import { type Language, defaultLang } from '../i18n';

export function detectUserLanguage(): Language {
  if (typeof window === 'undefined') return defaultLang;
  
  // Check localStorage first
  const savedLang = localStorage.getItem('preferred-language') as Language;
  if (savedLang && ['en', 'id'].includes(savedLang)) {
    return savedLang;
  }
  
  // Check browser language
  const browserLang = navigator.language.toLowerCase();
  
  // Indonesian language detection
  if (browserLang.includes('id') || browserLang.includes('indonesia')) {
    return 'id';
  }
  
  // Default to English for all other languages
  return 'en';
}

export function saveLanguagePreference(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', lang);
  }
}

export function getLanguageFromURL(): Language | null {
  if (typeof window === 'undefined') return null;
  
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  
  if (segments.length > 0 && ['en', 'id'].includes(segments[0])) {
    return segments[0] as Language;
  }
  
  return null;
}

export function redirectToLanguage(targetLang: Language) {
  if (typeof window === 'undefined') return;
  
  const currentPath = window.location.pathname;
  const currentLang = getLanguageFromURL();
  
  let newPath = currentPath;
  
  if (currentLang) {
    // Remove current language from path
    newPath = currentPath.replace(`/${currentLang}`, '') || '/';
  }
  
  // Add new language prefix (except for default language)
  if (targetLang !== defaultLang) {
    newPath = `/${targetLang}${newPath}`;
  }
  
  // Save preference and redirect
  saveLanguagePreference(targetLang);
  window.location.href = newPath;
}