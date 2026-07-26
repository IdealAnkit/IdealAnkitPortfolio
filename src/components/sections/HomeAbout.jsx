import React from 'react';
import { Link } from 'react-router-dom';
import { User, Code, Database, Folder, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import { aboutData } from '../../data/aboutData';

const HomeAbout = () => {
  return (
    <section className="w-full py-6 md:py-8">
      <ScrollReveal>
        <div className="glass-card p-8 md:p-12 max-w-6xl mx-auto relative overflow-hidden group">
          
          {/* Subtle Background Gradients */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            
            {/* Left: Title & Bio */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                  <User size={16} /> About Me
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Experiences</span>
                </h2>
              </div>
              
              <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                <p>
                  I’m a <span className="font-semibold text-gray-900 dark:text-white">Computer Science engineer</span> focused on building at the intersection of <span className="text-blue-600 dark:text-blue-400 font-medium">full-stack development</span> and <span className="text-purple-600 dark:text-purple-400 font-medium">AI engineering</span>.
                </p>
                <p className="mt-4">
                  I build <span className="font-medium text-gray-900 dark:text-gray-100">AI-powered products, agentic workflows, and scalable web applications</span> using <span className="font-medium text-gray-900 dark:text-gray-100">React, Python, FastAPI, Node.js</span>, and modern backend technologies.
                </p>
                <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
                  My work spans <span className="text-gray-800 dark:text-gray-200 font-medium">LLMs, RAG, LangChain, LangGraph, computer vision, and system design</span>, backed by a strong foundation in <span className="italic text-gray-800 dark:text-gray-200">DSA, DBMS, OS, and OOP</span>.
                </p>
              </div>

              <div className="pt-2">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group text-lg"
                >
                  Read Full Story <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Right: Colored Masonry Grid */}
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Tile 1: Experience */}
              <div className="group relative p-6 rounded-2xl bg-blue-500/10 dark:bg-blue-500/10 border border-blue-100 dark:border-white/10 transition-all hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                <div className="absolute right-0 bottom-0 opacity-10 dark:opacity-5 group-hover:scale-110 transition-transform duration-500">
                   <Code size={80} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                    <Code size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">2+</h3>
                  <p className="font-semibold text-gray-900 dark:text-gray-200">Years Experience</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Full Stack Dev</p>
                </div>
              </div>

              {/* Tile 2: Projects */}
              <div className="group relative p-6 rounded-2xl bg-sky-500/10 dark:bg-sky-500/10 border border-sky-100 dark:border-white/10 transition-all hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1">
                <div className="absolute right-0 bottom-0 opacity-10 dark:opacity-5 group-hover:scale-110 transition-transform duration-500">
                   <Folder size={80} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-sky-500/20">
                    <Folder size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">15+</h3>
                  <p className="font-semibold text-gray-900 dark:text-gray-200">Projects</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Delivered</p>
                </div>
              </div>

              {/* Tile 3: Tech Stack */}
              <div className="sm:col-span-2 group relative p-6 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-100 dark:border-white/10 transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
                 <div className="absolute right-0 bottom-0 opacity-10 dark:opacity-5 group-hover:scale-110 transition-transform duration-500">
                   <Database size={100} />
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'MongoDB', 'AWS'].map((tech) => (
                        <span key={tech} className="relative z-10 px-2 py-1 !bg-white dark:bg-gray-700 rounded-md text-xs font-bold !text-black dark:text-gray-200 border border-gray-300 dark:border-gray-600 shadow-sm" style={{ backgroundColor: 'white' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tile 4: AI Systems */}
              <div className="sm:col-span-2 group relative p-6 rounded-2xl bg-violet-500/10 dark:bg-violet-500/10 border border-violet-100 dark:border-white/10 transition-all hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1">
                <div className="absolute right-0 bottom-0 opacity-10 dark:opacity-5 group-hover:scale-110 transition-transform duration-500">
                  <Database size={96} />
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500 text-white flex items-center justify-center shadow-lg shadow-violet-500/20 shrink-0">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">AI Systems</h3>
                    <div className="flex flex-wrap gap-2">
                      {['LLMs', 'RAG', 'LangChain', 'LangGraph'].map((item) => (
                        <span key={item} className="relative z-10 px-2 py-1 !bg-white dark:bg-gray-700 rounded-md text-xs font-bold !text-black dark:text-gray-200 border border-gray-300 dark:border-gray-600 shadow-sm" style={{ backgroundColor: 'white' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default HomeAbout;
