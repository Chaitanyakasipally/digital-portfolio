import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArtifactPage from './pages/ArtifactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artifact/:id" element={<ArtifactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
