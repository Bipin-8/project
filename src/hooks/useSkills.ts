import { useState, useEffect } from 'react';
import { supabase, type Skill } from '../lib/supabase';

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const { data, error: err } = await supabase
          .from('skills')
          .select('*')
          .order('order_index', { ascending: true });

        if (err) throw err;
        setSkills(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch skills');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
};
