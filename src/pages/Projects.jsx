import React from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="w-full h-full pb-12">
      
      {/* Header */}
      <div className="glass-card p-8 md:p-12 text-center mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
          Featured Projects
        </h1>
        <p className="text-base md:text-xl text-black dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          These projects reflect my hands-on experience in full-stack development and applied AI/ML, focusing on real-world problem solving, performance, scalability, and clean system design.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
};

export default Projects;
