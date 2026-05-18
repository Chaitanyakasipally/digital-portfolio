import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <section id="bio" className="bio-section container animate-fade-in delay-100">
      <div className="bio-grid">
        <div className="bio-content glass-panel">
          <h2 className="section-title">Professional <span className="text-gradient">Bio</span></h2>
          <div className="bio-text">
            <p>
              Hello! I'm Chaitanya Kasipally, an Embedded Software Engineer with a deep passion for automotive technologies, artificial intelligence, and building safe, high-performance systems. My journey is rooted in a strong academic foundation, holding a Master's in Computer Science from the University of Dayton and currently pursuing a Master's in Artificial Intelligence at Indiana Wesleyan University.
            </p>
            <p>
              With over 6 years of experience across companies like BWI Group, Motorola Solutions, and Hyundai Motor India, I have architected and developed critical embedded software. My expertise spans Classic and Adaptive AUTOSAR, automotive diagnostics (UDS, DCM, DEM), and advanced vehicle dynamics modules. I excel at working with microcontrollers like Infineon Aurix and integrating complex sensor fusion and control algorithms.
            </p>
            <p>
              My aspirations involve leveraging modern AI—including deep learning and computer vision—to create the next generation of autonomous and intelligent vehicle systems. I thrive in cross-functional environments where I can ensure software quality, safety (ISO 26262), and continuous innovation.
            </p>
          </div>
        </div>
        <div className="bio-stats">
          <div className="stat-card glass-panel">
            <h3 className="text-gradient">6+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card glass-panel">
            <h3 className="text-gradient">3</h3>
            <p>Major Auto OEMs Supported</p>
          </div>
          <div className="stat-card glass-panel">
            <h3 className="text-gradient">2</h3>
            <p>Master's Degrees</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
