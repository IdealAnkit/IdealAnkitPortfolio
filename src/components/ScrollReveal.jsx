import React, { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay); // Optional delay for staggered effects
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% is visible
        rootMargin: "0px 0px -20px 0px" // Slight buffer to prevent flickering, but triggers sooner
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-20"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
