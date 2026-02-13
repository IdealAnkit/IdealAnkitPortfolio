import React, { Suspense } from 'react';
import HomeHero from '../components/sections/HomeHero';

// Lazy load below-the-fold components for performance optimization
const HomeAbout = React.lazy(() => import('../components/sections/HomeAbout'));
const HomeServices = React.lazy(() => import('../components/sections/HomeServices'));
const HomeProjects = React.lazy(() => import('../components/sections/HomeProjects'));
const HomeBlog = React.lazy(() => import('../components/sections/HomeBlog'));
const HomeContact = React.lazy(() => import('../components/sections/HomeContact'));

// Loading Fallback Component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-0">
      
      {/* Hero Section (Static Import for Instant LCP) */}
      <HomeHero />

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<SectionLoader />}>
        {/* About Preview */}
        <HomeAbout />

        {/* Services Section */}
        <HomeServices />

        {/* Projects Preview */}
        <HomeProjects />

        {/* Blog Preview */}
        <HomeBlog />

        {/* Contact CTA */}
        <HomeContact />
      </Suspense>

    </div>
  );
};

export default Home;
