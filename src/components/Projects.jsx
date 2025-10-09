import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-r from-pink-500 to-orange-600 text-black pt-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
