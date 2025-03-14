
import React, { useEffect } from 'react';
import { ArrowLeft, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const GraphicDesignProjects = () => {
  useEffect(() => {
    // Set page title
    document.title = "Graphic Design Projects - Abdul Rehman";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  // Projects with images from the dedicated folder
  const projects = [
    {
      id: 1,
      title: "Fast Food Combo Promotion",
      description: "Eye-catching advertisement featuring burger, pizza, and sides with vibrant colors to attract customers.",
      image: "/lovable-uploads/67b47ede-d982-4a8f-a27f-78919cccd3e8.png",
    },
    {
      id: 2,
      title: "KFC Spicy Double Chicken",
      description: "Bold promotional design with 50% off offer for KFC's spicy chicken buckets.",
      image: "/lovable-uploads/17a84213-2d5a-44e5-b19b-4996b5ebe4fd.png",
    },
    {
      id: 3,
      title: "BOGO Burger Deal",
      description: "Buy 1 Get 1 Free broasted burger offer at Rs 595, with clean layout and appetizing visuals.",
      image: "/lovable-uploads/9da0c030-bb8c-4745-b2da-8f409d3e6284.png",
    },
    {
      id: 4,
      title: "Food Business Card Design",
      description: "Dual-sided business card for restaurant with modern yellow and navy theme showcasing menu items.",
      image: "/lovable-uploads/d847d8c8-5b7c-4644-8840-1ff567a78e11.png",
    },
    {
      id: 5,
      title: "Chocolate Cupcakes Promo",
      description: "Retro-styled promotional design for chocolate cupcakes with 20% discount and eye-catching sunburst pattern.",
      image: "/lovable-uploads/49ec1af6-ec89-4e6f-85be-0ecb529c9ea3.png",
    },
    {
      id: 6,
      title: "Premium Pizza Delivery",
      description: "Artisanal pizza advertisement with 50% off promotion and 24/7 home delivery highlight.",
      image: "/lovable-uploads/8b59d96c-7d3d-4379-bfa6-b55e7e308f8c.png",
    },
    {
      id: 7,
      title: "Chocolate Chip Cookies",
      description: "Minimalist cookie advertisement showcasing classic and double chocolate varieties with 10% discount.",
      image: "/lovable-uploads/00810130-2eb7-42c7-89ba-6eca4e36f996.png",
    },
    {
      id: 8,
      title: "Restaurant Food Menu",
      description: "Vibrant food menu design with circular highlights and clear pricing for three signature dishes.",
      image: "/lovable-uploads/fcc5f2a9-e181-44b3-8732-861931d1a6ee.png",
    },
    {
      id: 9,
      title: "Food Catering Services",
      description: "Clean, modern catering service flyer with categorized event options and professional food photography.",
      image: "/lovable-uploads/475defaf-1063-44f2-a87a-27b2d6e4e23b.png",
    },
    {
      id: 10,
      title: "Restaurant Menu Portfolio",
      description: "Elegant restaurant menu design with diamond-shaped food photography arrangement and golden accents.",
      image: "/lovable-uploads/9ad97ff0-5f58-44a9-aae5-c558b87b2285.png",
    },
    {
      id: 11,
      title: "Luxury Car Rental Ad",
      description: "Premium car rental advertisement with bold typography and striking red and black color scheme.",
      image: "/lovable-uploads/80318e60-d593-45cf-8085-b8eaab208803.png",
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-black text-white">
      <div className="container-fluid py-12 md:py-16">
        <Link to="/#projects" className="inline-flex items-center text-portfolio-gray-300 hover:text-white transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to All Projects</span>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Graphic Design Projects</h1>
        <p className="text-portfolio-gray-300 text-lg mb-12 max-w-3xl">
          Creative visual solutions that communicate brand messages effectively and leave lasting impressions.
        </p>
        
        <Separator className="mb-12 bg-portfolio-gray-800" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <Card className="bg-transparent border-0 shadow-none overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-all duration-500 
                             group-hover:scale-105 max-w-[1280px] max-h-[1600px]"
                  />
                </div>
                <CardContent className="px-0 pt-4">
                  <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
                  <p className="text-portfolio-gray-300">{project.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignProjects;
