
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Abdul Rehman - Graphic Designer & Developer";
    
    // Smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
