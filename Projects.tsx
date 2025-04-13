'use client';
import React from 'react';

const projects = [
  {
    title: 'Skin Lesion Classification',
    description: 'Used SVM with quantum kernels for mapping input data to higher-dimensional space, achieving higher accuracy. Implemented CNNs using PyTorch and Keras for dermoscopic image classification.',
    tags: ['SVM', 'PyTorch', 'TensorFlow', 'CNN', 'Scikit-learn'],
    highlights: [
      'Quantum kernel implementation',
      'CNN architecture design',
      'Model evaluation & optimization'
    ]
  },
  {
    title: 'Hand Gestures Detection',
    description: 'Developed a real-time hand gesture detection system using OpenCV for video capture and processing. Integrated PyTorch and TensorFlow for training deep learning models.',
    tags: ['OpenCV', 'Mediapipe', 'TensorFlow', 'Computer Vision'],
    highlights: [
      'Real-time video processing',
      'Hand contour detection',
      'Deep learning model training'
    ]
  },
  {
    title: 'UAV Flight Control System',
    description: 'Developed flight control systems and a 5kg payload delivery mechanism for UAV in disaster relief scenarios. Implemented autonomous functionality and conducted workshops.',
    tags: ['TensorFlow', 'PyTorch', 'MissionPlanner', 'OpenCV'],
    highlights: [
      'Autonomous flight control',
      'Payload delivery system',
      'Disaster relief applications'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black">
      <div className="section-container">
        <h2 className="heading-secondary mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-white">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 