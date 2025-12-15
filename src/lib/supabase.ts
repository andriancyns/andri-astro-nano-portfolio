import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. View counter will use localStorage fallback.');
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function getViewCount(slug: string): Promise<number> {
  if (!supabase) return 0;
  
  try {
    const { data, error } = await supabase
      .from('page_views')
      .select('views')
      .eq('slug', slug)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching views:', error);
      return 0;
    }
    
    return data?.views || 0;
  } catch (err) {
    console.error('Error fetching views:', err);
    return 0;
  }
}

export async function incrementViewCount(slug: string): Promise<number> {
  if (!supabase) return 0;
  
  try {
    // Try to get existing record
    const { data: existing } = await supabase
      .from('page_views')
      .select('views')
      .eq('slug', slug)
      .single();
    
    if (existing) {
      // Update existing record
      const newViews = (existing.views || 0) + 1;
      const { data, error } = await supabase
        .from('page_views')
        .update({ views: newViews, updated_at: new Date().toISOString() })
        .eq('slug', slug)
        .select('views')
        .single();
      
      if (error) {
        console.error('Error incrementing views:', error);
        return existing.views || 0;
      }
      
      return data?.views || newViews;
    } else {
      // Insert new record
      const { data, error } = await supabase
        .from('page_views')
        .insert({ slug, views: 1, updated_at: new Date().toISOString() })
        .select('views')
        .single();
      
      if (error) {
        console.error('Error inserting views:', error);
        return 0;
      }
      
      return data?.views || 1;
    }
  } catch (err) {
    console.error('Error incrementing views:', err);
    return 0;
  }
}
