'use client';
import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Machine Learning & AI",
      items: [
        { name: "TensorFlow/Keras", level: "Intermediate" },
        { name: "PyTorch", level: "Intermediate" },
        { name: "Scikit-Learn", level: "Intermediate" },
        { name: "OpenCV", level: "Beginner" },
        { name: "Computer Vision", level: "Beginner" },
        { name: "Qiskit/Pennylane", level: "Beginner" }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: "Advanced" },
        { name: "C/C++", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "Node.JS/ReactJS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="skills" className="h-screen flex items-center justify-center bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-center mb-6">
          <span className="gradient-text">Technical Expertise</span>
        </h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-gray-300 text-lg">
            A dedicated Software Developer turned Full Stack Developer, with a growing interest in AI/ML technologies. Combining strong software development fundamentals with modern web development expertise to create innovative and user-friendly applications. Passionate about learning and implementing new technologies to build impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      skill.level === 'Advanced' ? 'bg-purple-900/30 text-purple-400' :
                      skill.level === 'Intermediate' ? 'bg-blue-900/30 text-blue-400' :
                      'bg-gray-700/30 text-gray-400'
                    }`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 