import { getViewCount, incrementViewCount } from './supabase';

/**
 * Get view count from Supabase
 */
export async function getViews(slug: string): Promise<number> {
  return await getViewCount(slug);
}

/**
 * Increment view count in Supabase
 */
export async function incrementView(slug: string): Promise<number> {
  return await incrementViewCount(slug);
}

/**
 * Get total views (for compatibility)
 */
export async function getTotalViews(slug: string): Promise<number> {
  return await getViewCount(slug);
}