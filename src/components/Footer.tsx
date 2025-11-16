import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Bipin-8', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bipin-pokhrel-256138392/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ontheschool88@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Bipin Pokhrel</h3>
            <p className="text-secondary-300">Developer, Student & Designer</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary-800 hover:bg-primary-600 rounded-full transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8 text-center text-secondary-300">
          <p className="flex items-center justify-center gap-2">
            Made by Bipin Pokhrel
          </p>
          <p className="mt-2 text-sm">© {currentYear} Bipin Pokhrel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
