
import React, { useEffect } from 'react';
import { ArrowLeft, ShoppingBag, Search, Users, BarChart, Truck, Globe, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.03]">
      <div className="w-12 h-12 rounded-full bg-portfolio-blue/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-portfolio-gray-300">{description}</p>
    </div>
  );
};

const EcommerceProjects = () => {
  useEffect(() => {
    // Set page title
    document.title = "E-commerce Services - Abdul Rehman";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Store Creation",
      description: "End-to-end e-commerce store setup with optimized product listings, payment integration, and brand-consistent design.",
      icon: <ShoppingBag size={24} className="text-portfolio-blue-400" />
    },
    {
      id: 2,
      title: "Product Hunting",
      description: "Strategic product selection and sourcing to maximize profit margins and market demand.",
      icon: <Search size={24} className="text-portfolio-blue-400" />
    },
    {
      id: 3,
      title: "Facebook Ad Campaigns",
      description: "Targeted advertising strategies that drive traffic and conversions through optimized social media campaigns.",
      icon: <Users size={24} className="text-portfolio-blue-400" />
    },
    {
      id: 4,
      title: "Store SEO",
      description: "Search engine optimization for e-commerce to improve visibility, traffic, and organic customer acquisition.",
      icon: <BarChart size={24} className="text-portfolio-blue-400" />
    },
    {
      id: 5,
      title: "Virtual Assistant",
      description: "Comprehensive support services for managing orders, customer inquiries, and day-to-day operations.",
      icon: <Users size={24} className="text-portfolio-blue-400" />
    },
    {
      id: 6,
      title: "Dropshipping",
      description: "Complete dropshipping business setup and management with reliable supplier connections.",
      icon: <Truck size={24} className="text-portfolio-blue-400" />
    },
    {
      id: 7,
      title: "Private Label",
      description: "Product development and branding services for creating your own branded product line.",
      icon: <ShoppingCart size={24} className="text-portfolio-blue-400" />
    },
    {
      id: 8,
      title: "Wholesale",
      description: "Bulk purchasing strategies and supplier relationships to maximize profit margins.",
      icon: <Globe size={24} className="text-portfolio-blue-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-black text-white">
      <div className="container-fluid py-16">
        <Link to="/#projects" className="inline-flex items-center text-portfolio-gray-300 hover:text-white transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to All Projects</span>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">E-commerce Services</h1>
        <p className="text-portfolio-gray-300 text-lg mb-12 max-w-3xl">
          Comprehensive e-commerce solutions to help businesses establish, grow, and optimize their online presence and sales.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceProjects;
