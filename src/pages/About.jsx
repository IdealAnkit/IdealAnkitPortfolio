import React from 'react';
import { aboutData } from '../data/aboutData';
import { Briefcase, GraduationCap, Code, User } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8 pb-12">
      
      {/* Header Section */}
      <div className="glass-card p-8 md:p-12 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
          About Me
        </h1>
        <p className="text-base md:text-xl text-black dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {aboutData.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Skills Column (Lives on the left/top) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="glass-card p-6 h-full">
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
               <Code className="w-6 h-6" />
               <h2 className="text-2xl font-semibold">Skills</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {aboutData.skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 ml-1">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 rounded-full text-sm bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 text-gray-800 dark:text-gray-200 transition-all hover:bg-white/80 dark:hover:bg-black/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience & Education Column (Lives on the right/bottom) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Experience Section */}
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 text-purple-600 dark:text-purple-400">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
              {aboutData.experience.map((exp) => (
                <div key={exp.id} className="relative flex items-start group">
                  <div className="absolute left-0 ml-5 -translate-x-1/2 p-1 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-full z-10 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="ml-12 w-full">
                    <h3 className="text-xl font-bold text-black dark:text-gray-100">{exp.role}</h3>
                    <h4 className="text-md font-medium text-blue-600 dark:text-blue-400 mb-1">{exp.company}</h4>
                    <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 mb-3">
                      {exp.period}
                    </span>
                    <p className="text-black dark:text-gray-400">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="glass-card p-6 md:p-8">
             <div className="flex items-center gap-2 mb-6 text-cyan-600 dark:text-cyan-400">
              <GraduationCap className="w-6 h-6" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>

            <div className="space-y-6">
              {aboutData.education.map((edu) => (
                 <div key={edu.id} className="p-4 rounded-xl bg-white/30 dark:bg-black/10 border border-white/20 dark:border-white/5 hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                       <h3 className="text-lg font-bold text-black dark:text-gray-100">{edu.institution}</h3>
                       <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{edu.period}</span>
                    </div>
                    <h4 className="text-md text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.degree}</h4>
                    <p className="text-sm text-gray-800 dark:text-gray-400">{edu.description}</p>
                 </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
