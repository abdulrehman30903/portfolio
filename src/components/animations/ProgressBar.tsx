
import React, { useEffect, useRef, useState } from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  percentage,
  color = 'bg-portfolio-blue',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a small delay before starting the animation
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [delay]);

  return (
    <div className="mb-6" ref={progressRef}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{label}</span>
        <span className={`font-semibold ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          {percentage}%
        </span>
      </div>
      <div className="h-2 w-full bg-portfolio-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1500 ease-out`}
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
