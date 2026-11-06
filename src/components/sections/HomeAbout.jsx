import React from 'react';
import { Link } from 'react-router-dom';
import { User, Code, Database, Folder, ArrowRight, BrainCircuit } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const HomeAbout = () => {
  const stacks = ['React', 'React Native', 'Python', 'FastAPI', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'Nginx'];

  return (
    <section className="w-full py-6 md:py-8">
      <ScrollReveal>
        <div className="glass-card p-8 md:p-12 max-w-6xl mx-auto relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                  <User size={16} /> About Me
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Useful Software</span>
                </h2>
              </div>
              <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                <p>
                  I’m a <span className="font-semibold text-gray-900 dark:text-white">Software Developer</span> working across <span className="text-blue-600 dark:text-blue-400 font-medium">full-stack engineering</span>, <span className="text-purple-600 dark:text-purple-400 font-medium">backend systems</span>, and <span className="text-blue-600 dark:text-blue-400 font-medium">applied AI</span>.
                </p>
                <p className="mt-4">
                  I build web and mobile applications with React, React Native, Node.js, and Python/FastAPI, and integrate LLM-powered capabilities such as RAG, AI assistants, and agent workflows.
                </p>
                <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
                  I also work with databases, Docker, Linux, Nginx, and CI/CD to help take applications from development to deployment.
                </p>
              </div>
              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group text-lg">
                  Explore Skills & Experience <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group relative p-6 rounded-2xl bg-blue-500/10 border border-blue-100 dark:border-white/10 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Full-Stack</h3>
                <p className="font-semibold text-gray-900 dark:text-gray-200">Web & Mobile</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">React · React Native · APIs</p>
              </div>

              <div className="group relative p-6 rounded-2xl bg-violet-500/10 border border-violet-100 dark:border-white/10 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-violet-500 text-white flex items-center justify-center mb-4">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Applied AI</h3>
                <p className="font-semibold text-gray-900 dark:text-gray-200">LLMs & RAG</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">LangChain · LangGraph</p>
              </div>

              <div className="sm:col-span-2 group relative p-6 rounded-2xl bg-cyan-500/10 border border-cyan-100 dark:border-white/10 transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500 text-white flex items-center justify-center shrink-0">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Technologies I Work With</h3>
                    <div className="flex flex-wrap gap-2">
                      {stacks.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white dark:bg-gray-700 rounded-md text-xs font-bold text-black dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 group relative p-6 rounded-2xl bg-emerald-500/10 border border-emerald-100 dark:border-white/10 transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Folder size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Selected Projects</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Explore practical work across backend development, AI/ML, computer vision, and mobile applications.</p>
                    <Link to="/projects" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      View projects <ArrowRight size={16} />
                    </Link>
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
