
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-portfolio-black/80 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-fluid flex justify-between items-center">
        <div className="text-white font-display font-bold text-xl">
          <span className="text-portfolio-blue">Abdul </span>Rehman
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="nav-link"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="nav-link"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="nav-link"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="nav-link"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="nav-link"
          >
            Contact
          </button>
          <a 
            href="https://wa.me/03111772506" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center"
          >
            WhatsApp
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-portfolio-black/95 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 flex flex-col pt-24 px-8`}
      >
        <nav className="flex flex-col space-y-6 items-center text-xl">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-portfolio-blue transition-colors w-full py-3"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-portfolio-blue transition-colors w-full py-3"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-white hover:text-portfolio-blue transition-colors w-full py-3"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-white hover:text-portfolio-blue transition-colors w-full py-3"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-portfolio-blue transition-colors w-full py-3"
          >
            Contact
          </button>
          <a 
            href="https://wa.me/03111772506" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary w-full text-center"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
