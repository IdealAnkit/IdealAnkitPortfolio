import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ProjectCard';
import MobileCarousel from '../MobileCarousel';
import ScrollReveal from '../ScrollReveal';

const HomeProjects = () => {
  // Take only the first 3 projects
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="w-full py-6 md:py-8">
      <ScrollReveal>
      <div className="glass-card p-6 md:p-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
            <Code size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A glimpse into my recent engineering work.
          </p>
        </div>

        {/* Projects Grid */}
        {/* Mobile Carousel View */}
        <div className="md:hidden">
           <MobileCarousel interval={4000}>
              {featuredProjects.map((project) => (
                 <ProjectCard key={project.id} project={project} />
              ))}
           </MobileCarousel>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group"
          >
            View All Projects <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default HomeProjects;
