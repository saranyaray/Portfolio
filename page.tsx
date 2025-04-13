'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="bg-black">
      <Navigation />
      <main className="snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center snap-start">
          <div className="section-container text-center">
            <h1 className="heading-primary mb-6">
              <span className="text-purple-400">Hi, I'm</span>{' '}
              <span className="gradient-text">Saranya Ray</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A passionate Full Stack Developer crafting beautiful and functional web experiences
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#projects" className="button-primary">
                View My Work
              </Link>
              <Link href="#contact" className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200 font-medium">
                Contact Me
              </Link>
            </div>
            
            {/* Tech stack pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {['Python', 'TensorFlow', 'PyTorch', 'React.js', 'Node.js', 'OpenCV'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-800 rounded-full shadow-md text-gray-300 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <section className="snap-start">
          <About />
        </section>
        <section className="snap-start">
          <Skills />
        </section>
        <section className="snap-start">
          <Projects />
        </section>
        <section className="snap-start">
          <Contact />
        </section>
      </main>
    </div>
  );
} 