import { useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../assets/profile.jpg'; // <-- make sure to put your image in src/assets

export const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div data-aos="zoom-in" className="mb-6">
          <img
            src={profilePic}
            alt="Bipin Pokhrel"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto border-4 border-primary-600 shadow-lg"
          />
        </div>

        {/* Name */}
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl font-display font-bold text-secondary-900 mb-6 leading-tight"
        >
          Hi, I'm <span className="text-primary-600">Bipin Pokhrel</span>
        </h1>

        {/* Role / Description */}
        <div data-aos="fade-up" data-aos-delay="100" className="h-20 md:h-24 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-display text-primary-600">
            Student, Developer & Tech Enthusiast
          </p>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-secondary-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting beautiful, functional digital experiences with modern technologies. Let's build something amazing
          together.
        </p>

        {/* Buttons */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-6">
          <a
            href="https://github.com/Bipin-8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary-100 text-secondary-600 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/bipin-pokhrel-256138392/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary-100 text-secondary-600 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=ontheschool88@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary-100 text-secondary-600 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

    </section>
  );
};
