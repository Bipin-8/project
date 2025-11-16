import { useEffect } from 'react';
import AOS from 'aos';

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="About me"
              className="rounded-lg shadow-xl object-cover w-full h-96"
            />
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <p className="text-lg text-secondary-600 leading-relaxed">
              I'm a passionate developer building web applications that solve real-world problems.
              My journey started with a curiosity about how websites work, and it evolved into a
              career dedicated to creating elegant solutions through code.
            </p>

            <p className="text-lg text-secondary-600 leading-relaxed">
              I specialize in modern web technologies, with expertise in React, TypeScript, and backend development.
              I'm committed to writing clean, maintainable code and creating seamless user experiences that delight
              clients and end-users alike.
            </p>

            <p className="text-lg text-secondary-600 leading-relaxed">
              Beyond coding, I'm passionate about continuous learning, mentoring juniors, and contributing
              to the open-source community. When I'm not coding, you can find me exploring new technologies or
              enjoying outdoor adventures.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
