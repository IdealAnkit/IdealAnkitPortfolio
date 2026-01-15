import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-full 
        transition-all duration-300 ease-in-out
        hover:bg-gray-200/50 dark:hover:bg-gray-800/50
        focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
        text-gray-800 dark:text-gray-100
      `}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Sun className="w-6 h-6 text-yellow-500 fill-current" />
      ) : (
        <Moon className="w-6 h-6 text-blue-300 fill-current" />
      )}
    </button>
  );
};

export default ThemeToggle;
