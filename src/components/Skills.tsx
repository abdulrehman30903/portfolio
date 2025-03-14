
import React, { useEffect, useRef } from 'react';
import ProgressBar from './animations/ProgressBar';
import { 
  Palette, Code, Bot, ShoppingBag, 
  Image as ImageIcon, Globe, MessageSquare, Search,
  Users, Truck, ShoppingCart, BarChart
} from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: { label: string; percentage: number; }[];
  delay?: number;
  colorClass?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  icon, 
  skills, 
  delay = 0,
  colorClass = "bg-portfolio-blue-400" 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="glass-card p-8 rounded-2xl opacity-0 translate-y-8 transition-all duration-700"
    >
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClass} bg-opacity-20 mr-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <ProgressBar 
            key={skill.label} 
            label={skill.label} 
            percentage={skill.percentage} 
            color={colorClass}
            delay={(index + 1) * 100} 
          />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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
    
    if (titleRef.current) observer.observe(titleRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-24 bg-portfolio-black"
    >
      <div className="container-fluid">
        <h2 
          ref={titleRef} 
          className="section-heading opacity-0 transition-all duration-1000 animate-fade-in"
        >
          My Skills
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard
            title="Graphic Designing"
            icon={<Palette size={24} className="text-portfolio-blue-400" />}
            skills={[
              { label: "Adobe Photoshop", percentage: 95 },
              { label: "Canvas", percentage: 90 },
              { label: "Brand Identity Design", percentage: 92 },
              { label: "Typography", percentage: 88 },
              { label: "Color Theory", percentage: 94 },
              { label: "Digital Illustration", percentage: 85 },
            ]}
            delay={100}
          />
          
          <SkillCard
            title="Web Development"
            icon={<Code size={24} className="text-portfolio-blue-400" />}
            skills={[
              { label: "HTML", percentage: 85 },
              { label: "CSS", percentage: 82 },
              { label: "JavaScript", percentage: 78 },
              { label: "Responsive Design", percentage: 80 },
              { label: "UI/UX Design", percentage: 75 },
            ]}
            delay={200}
          />
          
          <SkillCard
            title="Chatbot Development"
            icon={<Bot size={24} className="text-portfolio-blue-400" />}
            skills={[
              { label: "Dialogflow", percentage: 88 },
              { label: "Node.js", percentage: 84 },
              { label: "MongoDB", percentage: 82 },
              { label: "Conversational UX", percentage: 85 },
              { label: "API Integration", percentage: 80 },
            ]}
            delay={300}
          />
          
          <SkillCard
            title="E-commerce Expertise"
            icon={<ShoppingBag size={24} className="text-portfolio-blue-400" />}
            skills={[
              { label: "Store Creation", percentage: 92 },
              { label: "Product Hunting", percentage: 90 },
              { label: "Facebook Ad Campaigns", percentage: 85 },
              { label: "Store SEO", percentage: 88 },
              { label: "Dropshipping", percentage: 90 },
              { label: "Private Label", percentage: 85 },
            ]}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
