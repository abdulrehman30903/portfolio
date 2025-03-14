
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-portfolio-black py-8 border-t border-portfolio-gray-800">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white text-center md:text-left">
            <div className="text-xl font-bold mb-1">
              <span className="text-portfolio-blue">Abdul </span>Rehman
            </div>
            <p className="text-portfolio-gray-400 text-sm">GRAPHIC DESIGNER</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-portfolio-gray-300">
            <a 
              href="mailto:abrulrehman30902@gmail.com" 
              className="flex items-center gap-2 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
              <span className="text-sm">abrulrehman30902@gmail.com</span>
            </a>
            <a 
              href="tel:03111772506" 
              className="flex items-center gap-2 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone size={16} />
              <span className="text-sm">03111772506</span>
            </a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/abdulrehman30903" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-portfolio-gray-300 hover:text-white hover:bg-portfolio-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdul-rehman-4055722ab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-portfolio-gray-300 hover:text-white hover:bg-portfolio-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
