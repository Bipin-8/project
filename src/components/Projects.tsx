import { useEffect, useState } from 'react';
import AOS from 'aos';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  demo_url?: string;
  github_url?: string;
  tech_stack: string[];
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Example project data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React and Tailwind.',
      image_url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      demo_url: 'https://example.com/demo1',
      github_url: 'https://github.com/example1',
      tech_stack: ['React', 'Tailwind', 'TypeScript'],
    },
    {
      id: 2,
      title: 'E-Commerce App',
      description: 'Full-stack e-commerce application.',
      image_url: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg',
      demo_url: 'https://example.com/demo2',
      github_url: 'https://github.com/example2',
      tech_stack: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'CMS-based blog platform with admin panel.',
      image_url: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
      demo_url: 'https://example.com/demo3',
      github_url: 'https://github.com/example3',
      tech_stack: ['Next.js', 'GraphQL', 'Tailwind'],
    },
    {
      id: 4,
      title: 'Chat App',
      description: 'Real-time chat application with sockets.',
      image_url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      demo_url: 'https://example.com/demo4',
      github_url: 'https://github.com/example4',
      tech_stack: ['React', 'Socket.io', 'Express'],
    },
    {
      id: 5,
      title: 'Task Manager',
      description: 'Task manager app with drag and drop support.',
      image_url: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg',
      demo_url: 'https://example.com/demo5',
      github_url: 'https://github.com/example5',
      tech_stack: ['React', 'Redux', 'Tailwind'],
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'Weather forecast app using public APIs.',
      image_url: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg',
      demo_url: 'https://example.com/demo6',
      github_url: 'https://github.com/example6',
      tech_stack: ['React', 'API', 'CSS'],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-primary-600 hover:text-primary-700 hover:scale-110 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-primary-600 hover:text-primary-700 hover:scale-110 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 flex justify-between items-center p-6 bg-white border-b border-secondary-200">
              <h2 className="text-2xl font-bold text-secondary-900">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 hover:bg-secondary-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-secondary-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <img
                src={selectedProject.image_url}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div>
                <h3 className="font-semibold text-secondary-900 mb-2">Description</h3>
                <p className="text-secondary-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-secondary-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-secondary-200">
                {selectedProject.demo_url && (
                  <a
                    href={selectedProject.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </a>
                )}
                {selectedProject.github_url && (
                  <a
                    href={selectedProject.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
