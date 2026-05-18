import React from 'react';
import Hero from '../components/Hero';
import Bio from '../components/Bio';
import ArtifactCard from '../components/ArtifactCard';
import { artifacts } from '../data/artifacts';

const Home = () => {
  return (
    <div>
      <Hero />
      <Bio />
      
      <section id="artifacts" className="container" style={{ padding: '6rem 2rem' }}>
        <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Featured <span className="text-gradient">Artifacts</span>
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {artifacts.map((artifact, index) => (
            <ArtifactCard key={artifact.id} artifact={artifact} index={index} />
          ))}
        </div>
      </section>
      
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Digital Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
