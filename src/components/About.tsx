
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
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
    
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-portfolio-gray-900"
    >
      <div className="container-fluid">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Image */}
          <div 
            ref={imageRef} 
            className="opacity-0 transition-all duration-1000 animate-fade-in-left"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-portfolio-blue-500/20 rounded-2xl blur-xl"></div>
              <div className="glass-card p-4 rounded-2xl relative">
                <img 
                  src="/lovable-uploads/c3ba3bca-3df0-4fb9-a48c-6642bc5f42a4.png" 
                  alt="About Abdul Rehman" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-5 -left-5 glass-card p-4 rounded-xl animate-float shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-white font-medium">Available for Work</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div 
            ref={contentRef} 
            className="opacity-0 transition-all duration-1000 animate-fade-in-right"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Graphic Designer with a passion for creating visual narratives
            </h3>
            <div className="text-portfolio-gray-300 space-y-4">
              <p>
                I am a graphic designer with 3 years of experience creating compelling visual identities. My design philosophy revolves around blending aesthetics with strategic thinking to deliver designs that not only look captivating but also effectively communicate my clients' visions.
              </p>
              <p>
                Beyond graphic design, I bring versatility with 3 years of Shopify e-commerce expertise, 2 years of chatbot development, and a year of web development. This multidisciplinary background allows me to understand projects holistically and deliver cohesive creative solutions across different digital touchpoints.
              </p>
              <p>
                I'm passionate about staying current with design trends and technologies, constantly pushing my creative boundaries to craft memorable visual experiences that elevate brands and engage audiences.
              </p>
            </div>
            
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-portfolio-blue font-semibold mb-1">Name</h4>
                  <p className="text-white">Abdul Rehman</p>
                </div>
                <div>
                  <h4 className="text-portfolio-blue font-semibold mb-1">Email</h4>
                  <p className="text-white break-words">abrulrehman30902@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-portfolio-blue font-semibold mb-1">Phone</h4>
                  <p className="text-white">03111772506</p>
                </div>
                <div>
                  <h4 className="text-portfolio-blue font-semibold mb-1">Location</h4>
                  <p className="text-white">Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
