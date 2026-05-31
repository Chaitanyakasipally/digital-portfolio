import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Code, User, ChevronDown } from 'lucide-react';
import { artifacts } from '../data/artifacts';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="text-gradient">Portfolio.</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              onClick={() => setTimeout(() => document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' }), 100)} 
              className="navbar-link"
            >
              <User size={18} />
              <span>Bio</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/" 
              onClick={() => setTimeout(() => document.getElementById('value-prop')?.scrollIntoView({ behavior: 'smooth' }), 100)} 
              className="navbar-link"
              title="Value Proposition"
            >
              <Briefcase size={18} />
              <span>Value Prop</span>
            </Link>
          </li>
          <li 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="navbar-link" style={{ cursor: 'pointer' }}>
              <Code size={18} />
              <span>Artifacts</span>
              <ChevronDown size={14} />
            </div>
            {dropdownOpen && (
              <div className="dropdown-content glass-panel">
                {artifacts.map((artifact, index) => (
                  <Link key={artifact.id} to={`/artifact/${artifact.id}`} className="dropdown-item">
                    Artifact {index + 1}: {artifact.title}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
