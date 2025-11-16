/*
  # Portfolio Database Schema

  1. New Tables
    - `projects` - Portfolio projects with images, descriptions, tech stack
    - `skills` - Technical skills organized by category with proficiency levels
    - `testimonials` - Client testimonials with ratings and attribution
    - `form_submissions` - Contact form submissions

  2. Security
    - Enable RLS on all tables
    - Public read access for portfolio content
    - Authenticated write for admin submissions
    - Secure form submission storage

  3. Columns and Descriptions
    - projects: id, title, description, image_url, tech_stack (array), demo_url, github_url, category, order_index, created_at
    - skills: id, category, name, proficiency (1-5), icon, order_index, created_at
    - testimonials: id, client_name, client_role, company, content, rating, image_url, created_at
    - form_submissions: id, name, email, subject, message, created_at
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  tech_stack text[] DEFAULT '{}',
  demo_url text,
  github_url text,
  category text DEFAULT 'web',
  order_index int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  name text NOT NULL,
  proficiency int DEFAULT 3,
  icon text DEFAULT 'code',
  order_index int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_role text,
  company text,
  content text NOT NULL,
  rating int DEFAULT 5,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Skills are viewable by everyone"
  ON skills FOR SELECT
  USING (true);

CREATE POLICY "Testimonials are viewable by everyone"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Form submissions can be created by anyone"
  ON form_submissions FOR INSERT
  WITH CHECK (true);

INSERT INTO projects (title, description, image_url, tech_stack, demo_url, github_url, category, order_index) VALUES
('E-Commerce Platform', 'A modern e-commerce platform with real-time inventory management and payment integration.', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'], 'https://demo.example.com', 'https://github.com', 'web', 1),
('Analytics Dashboard', 'Interactive data visualization dashboard for real-time business analytics and reporting.', 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg', ARRAY['React', 'TypeScript', 'Chart.js', 'Tailwind'], 'https://demo.example.com', 'https://github.com', 'web', 2),
('Mobile App Design', 'User-friendly mobile application for task management with cloud synchronization.', 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg', ARRAY['React Native', 'Firebase', 'Redux'], 'https://demo.example.com', 'https://github.com', 'mobile', 3);

INSERT INTO skills (category, name, proficiency, icon, order_index) VALUES
('Frontend', 'React', 5, 'code', 1),
('Frontend', 'TypeScript', 5, 'code', 2),
('Frontend', 'Tailwind CSS', 5, 'code', 3),
('Frontend', 'Vue.js', 4, 'code', 4),
('Backend', 'Node.js', 5, 'code', 5),
('Backend', 'PostgreSQL', 4, 'database', 6),
('Backend', 'Supabase', 5, 'code', 7),
('Tools', 'Git', 5, 'git-branch', 8),
('Tools', 'Docker', 4, 'box', 9),
('Tools', 'Figma', 4, 'pen-tool', 10);

INSERT INTO testimonials (client_name, client_role, company, content, rating, image_url) VALUES
('Sarah Johnson', 'Product Manager', 'Tech Startup Inc', 'Exceptional work! The developer delivered a high-quality solution ahead of schedule with great attention to detail.', 5, 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'),
('Michael Chen', 'CEO', 'Digital Solutions Co', 'Professional, responsive, and technically excellent. Highly recommended for any project.', 5, 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'),
('Emma Davis', 'Project Lead', 'Creative Agency', 'Great communication and problem-solving skills. A pleasure to work with on multiple projects.', 5, 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg');
