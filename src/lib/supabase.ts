import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  tech_stack: string[];
  demo_url: string | null;
  github_url: string | null;
  category: string;
  order_index: number;
  created_at: string;
};

export type Skill = {
  id: string;
  category: string;
  name: string;
  proficiency: number;
  icon: string;
  order_index: number;
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_role: string | null;
  company: string | null;
  content: string;
  rating: number;
  image_url: string | null;
  created_at: string;
};
