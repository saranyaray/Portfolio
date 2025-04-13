'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text">
            SR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 bg-black/95">
            <div className="flex flex-col space-y-2">
              <Link href="#about" className="nav-link px-2 py-1">
                About
              </Link>
              <Link href="#skills" className="nav-link px-2 py-1">
                Skills
              </Link>
              <Link href="#projects" className="nav-link px-2 py-1">
                Projects
              </Link>
              <Link href="#contact" className="nav-link px-2 py-1">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 