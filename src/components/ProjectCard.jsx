import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
      {/* <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      /> */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition w-full text-center"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
