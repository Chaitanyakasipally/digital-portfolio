import React, { useEffect } from 'react';
import ArtifactDetail from '../components/ArtifactDetail';

const ArtifactPage = () => {
  // Scroll to top when loading a new artifact
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ArtifactDetail />
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Digital Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ArtifactPage;
