import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ArtifactCard.css';

const ArtifactCard = ({ artifact, index }) => {
  return (
    <div className={`artifact-card glass-panel animate-fade-in delay-${(index % 3 + 1) * 100}`}>
      <div className="artifact-card-content">
        <h3 className="artifact-title">{artifact.title}</h3>
        <p className="artifact-intro">{artifact.introduction}</p>
        <div className="artifact-tech">
          {artifact.toolsAndTechnologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
          {artifact.toolsAndTechnologies.length > 3 && (
            <span className="tech-badge">+{artifact.toolsAndTechnologies.length - 3}</span>
          )}
        </div>
      </div>
      <div className="artifact-card-footer">
        <Link to={`/artifact/${artifact.id}`} className="view-link">
          View Details <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ArtifactCard;
