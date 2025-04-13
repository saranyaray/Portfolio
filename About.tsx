'use client';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="h-screen flex items-center justify-center bg-black">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. 
              My journey in software development has equipped me with a strong foundation in both frontend 
              and backend technologies.
            </p>
            <p className="text-gray-300 text-lg">
              I specialize in creating responsive, user-friendly interfaces using React.js and Next.js, 
              while also having a deep understanding of backend development and database management.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-purple-400 mb-6">Key Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Full Stack Development with modern technologies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Strong problem-solving and analytical skills</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Experience with agile development methodologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 