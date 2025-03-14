
import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatbotProjects = () => {
  useEffect(() => {
    // Set page title
    document.title = "Chatbot Projects - Abdul Rehman";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Chatbot for Pizza Delivery",
      description: "An intelligent conversational interface that streamlines the pizza ordering process, handling customer preferences, delivery details, and payment options.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "https://chatbot-pizza-boy.vercel.app/",
      technologies: ["Dialogflow", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Chatbot for Automobiles",
      description: "A sophisticated virtual assistant for automobile businesses that handles customer inquiries about vehicles, parts, servicing, and schedules appointments.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "https://chtbot-auto-mobile.vercel.app/",
      technologies: ["Dialogflow", "Node.js", "MongoDB", "React"]
    },
    {
      id: 3,
      title: "Chatbot for FAQs",
      description: "A dynamic FAQ chatbot system that intelligently answers user questions, reduces support workload, and gathers valuable customer insights.",
      image: "https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "https://faq-chatbot-wine.vercel.app/",
      technologies: ["Dialogflow", "Node.js", "Express", "NLP"]
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-black text-white">
      <div className="container-fluid py-16">
        <Link to="/#projects" className="inline-flex items-center text-portfolio-gray-300 hover:text-white transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to All Projects</span>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Chatbot Projects</h1>
        <p className="text-portfolio-gray-300 text-lg mb-12 max-w-3xl">
          Specialized in developing intelligent conversational interfaces that enhance user experience and business operations.
        </p>
        
        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-72 lg:h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-portfolio-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-portfolio-blue/20 text-portfolio-blue-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatbotProjects;
