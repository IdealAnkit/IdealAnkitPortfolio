import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card flex flex-col h-full transition-all duration-300 md:hover:scale-[1.02] group overflow-hidden">
      
      {/* Project Image 16:9 */}
      <div className="w-full aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Header: Icon + Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
            <Folder className="w-6 h-6" />
          </div>
          
          <div className="flex gap-3">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub Link"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.links.demo && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Live Demo Link"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2 text-black dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-black dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Footer: Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      </div>
    
    </div>
  );
};

export default ProjectCard;
