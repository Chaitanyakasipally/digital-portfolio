import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { artifacts } from '../data/artifacts';
import './ArtifactDetail.css';

const ArtifactDetail = () => {
  const { id } = useParams();
  const artifact = artifacts.find(a => a.id === id);

  if (!artifact) {
    return <Navigate to="/" />;
  }

  return (
    <div className="artifact-detail container animate-fade-in">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back to Portfolio
      </Link>
      
      <div className="artifact-header">
        <h1 className="artifact-detail-title text-gradient">{artifact.title}</h1>
        <p className="artifact-detail-intro">{artifact.introduction}</p>
      </div>

      <div className="artifact-content-grid">
        <div className="main-col">
          {artifact.image && (
            <div className="artifact-image-container glass-panel" style={{ padding: '1rem', marginBottom: '2rem' }}>
              <img src={artifact.image} alt={artifact.title} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          )}
          <section className="detail-section glass-panel">
            <h2>Description</h2>
            <p>{artifact.description}</p>
          </section>

          <section className="detail-section glass-panel">
            <h2>Process</h2>
            <p style={{ whiteSpace: 'pre-wrap' }}>{artifact.process}</p>
          </section>

          <section className="detail-section glass-panel">
            <h2>Value Proposition</h2>
            <p>{artifact.valueProposition}</p>
          </section>

          {artifact.reflection && (
            <section className="detail-section glass-panel">
              <h2>Reflection</h2>
              <p>{artifact.reflection}</p>
            </section>
          )}
        </div>

        <div className="side-col">
          <section className="detail-section glass-panel">
            <h2>Objective</h2>
            <p>{artifact.objective}</p>
          </section>

          <section className="detail-section glass-panel">
            <h2>Tools & Technologies</h2>
            <div className="tech-tags">
              {artifact.toolsAndTechnologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </section>

          <section className="detail-section glass-panel">
            <h2>Unique Value</h2>
            <p>{artifact.uniqueValue}</p>
          </section>

          <section className="detail-section glass-panel">
            <h2>Relevance</h2>
            <p>{artifact.relevance}</p>
          </section>

          {artifact.references && (
            <section className="detail-section glass-panel">
              <h2>References</h2>
              <p style={{ whiteSpace: 'pre-wrap' }}>{artifact.references}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetail;
