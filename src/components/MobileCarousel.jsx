import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileCarousel = ({ children, interval = 5000 }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const totalItems = React.Children.count(children);

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const width = scrollContainer.clientWidth;
      scrollContainer.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    setIsPaused(true);
    const nextIndex = activeIndex === 0 ? totalItems - 1 : activeIndex - 1;
    scrollToIndex(nextIndex);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleNext = () => {
    setIsPaused(true);
    const nextIndex = (activeIndex + 1) % totalItems;
    scrollToIndex(nextIndex);
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % totalItems;
      scrollToIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, interval, totalItems]);

  // Handle manual scroll updates (e.g. swipe)
  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const width = scrollContainer.clientWidth;
      const index = Math.round(scrollContainer.scrollLeft / width);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <div className="relative w-full group rounded-[35px] overflow-hidden">
      
      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="grid grid-flow-col auto-cols-[100%] gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          return (
            <div className="w-full snap-center h-full flex flex-col">
              {React.cloneElement(child, { className: `${child.props.className || ''} h-full` })}
            </div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 text-gray-800 dark:text-white shadow-lg hover:bg-white/20 active:scale-95 transition-all z-10"
        aria-label="Previous Item"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 text-gray-800 dark:text-white shadow-lg hover:bg-white/20 active:scale-95 transition-all z-10"
        aria-label="Next Item"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalItems }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
                setIsPaused(true);
                scrollToIndex(idx);
                setTimeout(() => setIsPaused(false), 5000);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex 
                ? 'w-6 bg-blue-600 dark:bg-blue-400' 
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to item ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default MobileCarousel;
