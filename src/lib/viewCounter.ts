import viewsData from '../data/views.json';

export function getViews(slug: string): number {
  return viewsData[slug as keyof typeof viewsData] || 0;
}

export function incrementView(slug: string): void {
  // Client-side increment using localStorage
  if (typeof window !== 'undefined') {
    const storageKey = `blog-views-${slug}`;
    const currentViews = parseInt(localStorage.getItem(storageKey) || '0');
    const newViews = currentViews + 1;
    localStorage.setItem(storageKey, newViews.toString());
  }
}

export function getLocalViews(slug: string): number {
  if (typeof window !== 'undefined') {
    const storageKey = `blog-views-${slug}`;
    return parseInt(localStorage.getItem(storageKey) || '0');
  }
  return 0;
}

export function getTotalViews(slug: string): number {
  const baseViews = getViews(slug);
  const localViews = getLocalViews(slug);
  return baseViews + localViews;
}