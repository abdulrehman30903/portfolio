
import React, { useEffect, useRef } from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    
    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-portfolio-black"
    >
      <div className="container-fluid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div 
          ref={leftRef} 
          className="order-2 md:order-1 opacity-0 transition-all duration-1000 animate-fade-in-left"
        >
          <span className="text-portfolio-blue text-sm md:text-base uppercase tracking-widest font-medium mb-4 block">
            Graphic Designer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            I'm Abdul Rehman
          </h1>
          <p className="text-portfolio-gray-300 text-lg md:text-xl mb-8 max-w-lg">
            A passionate graphic designer with 3+ years of experience creating stunning visuals 
            and brand identities that make businesses stand out in the digital landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.linkedin.com/in/abdul-rehman-4055722ab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary group flex items-center gap-2"
            >
              Connect with Me 
              <Linkedin size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary group flex items-center gap-2"
            >
              See My Work
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div 
          ref={rightRef} 
          className="order-1 md:order-2 flex justify-center opacity-0 transition-all duration-1000 animate-fade-in-right"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-portfolio-blue/30 rounded-full blur-[60px] animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-blue/50 shadow-[0_0_40px_rgba(0,112,243,0.3)]">
              <img 
                src="/lovable-uploads/c3ba3bca-3df0-4fb9-a48c-6642bc5f42a4.png" 
                alt="Abdul Rehman" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-xl animate-float">
              <div className="text-white text-sm font-medium">Graphic Designer</div>
              <div className="text-portfolio-blue-300 text-xs">Branding & UI/UX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
