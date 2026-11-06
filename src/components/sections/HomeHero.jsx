import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typewriter from '../Typewriter';
import ProfileImage from '../../assets/IdealAnkit.jpg';
import Resume from '../../assets/ANKIT_KUMAR_RESUME.pdf';
import ScrollReveal from '../ScrollReveal';

const HomeHero = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full pt-6 pb-4 md:pt-12 md:pb-10">
      <ScrollReveal className="w-full">
        <div className="glass-card p-4 md:p-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 min-w-[300px] md:min-w-[480px] text-center lg:text-left order-1">
            <p className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-3">
              Full-Stack Development · AI Engineering · Automation
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Ankit Kumar
            </h1>
            <h2 className="text-lg md:text-2xl mb-6 text-black dark:text-gray-300 font-light tracking-wide min-h-[1.5em]">
              I build as a <Typewriter words={["Full-Stack Developer", "AI Engineer", "Backend Developer", "React Native Developer", "DevOps-minded Engineer"]} />
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full mb-6 md:mb-8 opacity-80"></div>
            <p className="text-base md:text-xl text-black dark:text-gray-400 leading-relaxed">
              I design and develop <span className="font-semibold text-blue-700 dark:text-blue-300">web and mobile applications</span>, reliable backend services, and practical <span className="font-semibold text-purple-700 dark:text-purple-300">AI-powered features</span>. I work across the stack—from React and React Native interfaces to Python/FastAPI and Node.js backends, data stores, integrations, and deployment.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6">
              {["React", "React Native", "Python", "FastAPI", "Node.js", "MongoDB", "PostgreSQL", "LLMs & RAG", "LangChain", "LangGraph", "Docker", "Linux & Nginx"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs md:text-sm bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-200">
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic mt-6">
              Turning practical business and product needs into maintainable software.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform">
                <Mail size={19} /> Discuss a Project
              </Link>
              <Link to="/projects" className="flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
                View My Work <ArrowRight size={18} />
              </Link>
              <a href={Resume} download="ANKIT_KUMAR_RESUME.pdf" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 font-semibold hover:scale-105 transition-transform">
                <Download size={19} /> Download CV
              </a>
            </div>
          </div>
          <div className="flex-1 min-w-[280px] flex justify-center order-2">
            <img src={ProfileImage} alt="Ankit Kumar" className="profile-blob" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default HomeHero;
