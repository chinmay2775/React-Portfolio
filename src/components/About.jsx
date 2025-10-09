import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-r from-pink-500 to-orange-600 text-white pt-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            I am Chinmay Chaudhari, a Computer Science student at Pimpri Chinchwad University.
            With expertise in C, Python and Java. 
            I craft robust backend solutions.
          </p>
          <p className="text-lg text-gray-700">
            My journey is driven by a passion for building scalable, 
            efficient systems that power modern applications. 
            I enjoy tackling complex challenges and exploring cutting-edge tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
