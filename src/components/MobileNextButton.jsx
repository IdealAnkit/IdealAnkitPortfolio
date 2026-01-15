import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUp, ArrowLeft } from 'lucide-react';

const MobileNextButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Define the navigation flow
  const navFlow = [
    { path: '/', next: '/about', label: 'About Me' },
    { path: '/about', next: '/projects', label: 'Projects' },
    { path: '/projects', next: '/blog', label: 'Blog' },
    { path: '/blog', next: '/contact', label: 'Contact' },
    { path: '/contact', next: '/', label: 'Back to Home', icon: ArrowUp },
  ];

  // Logic to find the next step
  let nextStep = navFlow.find(step => step.path === currentPath);

  // Handle Blog Post sub-routes (e.g., /blog/my-post) -> Go back to Blog
  if (!nextStep && currentPath.startsWith('/blog/')) {
    nextStep = { next: '/blog', label: 'Back to Blog', icon: ArrowLeft };
  }

  // If still no match (e.g. 404), default to Home
  if (!nextStep && !currentPath.startsWith('/blog/')) {
    nextStep = { next: '/', label: 'Home', icon: ArrowUp };
  }

  const handleNext = () => {
    navigate(nextStep.next);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  const Icon = nextStep.icon || ArrowRight;

  return (
    <div className="w-full flex justify-center py-8 md:hidden">
      <button
        onClick={handleNext}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all text-sm backdrop-blur-sm"
        aria-label={`Go to ${nextStep.label}`}
      >
        <span>{nextStep.label}</span>
        <Icon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default MobileNextButton;
