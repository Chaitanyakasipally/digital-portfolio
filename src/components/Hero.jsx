import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="value-prop" className="hero-section container animate-fade-in">
      <div className="hero-content glass-panel">
        <h1 className="hero-title">
          Building <span className="text-gradient">Digital Experiences</span> That Matter.
        </h1>
        <p className="hero-subtitle">
          I am an Embedded Software Engineer specializing in AUTOSAR architectures, vehicle dynamics, and AI. With a Master's in Computer Science and ongoing studies in Artificial Intelligence, my unique value lies in combining deep technical expertise in embedded C/C++ with advanced machine learning capabilities to build robust, safe, and intelligent automotive systems.
        </p>
      </div>
    </section>
  );
};

export default Hero;
