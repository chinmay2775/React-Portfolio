import React from 'react';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-r from-pink-500 to-orange-600 text-white pt-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.frontend.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.backend.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
