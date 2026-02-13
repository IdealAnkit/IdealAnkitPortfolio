import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen w-full relative transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''} flex flex-col`}>
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Liquid Background Blobs */}
      {/* Geometric Pattern Background */ }
      <div className="fixed inset-0 z-0 pointer-events-none uiverse-pattern"></div>

      {/* Main Content Wrapper - Added flex-grow to push footer down */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex-grow">
        {children}
      </main>



      {/* Global Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

    </div>
  );
};

export default Layout;
