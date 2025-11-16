import { useState, useEffect } from 'react';
import { supabase, type Testimonial } from '../lib/supabase';

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const { data, error: err } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false });

        if (err) throw err;
        setTestimonials(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch testimonials');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};
