import React from 'react';
import './Projects.css';

function Project() {
  return (
    <div className="projects-container">
      <h3 className="projects-header">PROJECTS</h3> 
      <div className="d-flex flex-wrap gap-3 justify-content-between">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-img-container">
            <img src="./Notes.jpg" className="card-img-top" alt="Personalised Notes Blog" />
            <a
              href="https://github.com/frankcastle026/Personalised_notes_blog"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn2"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Personalised Notes Blog</h5>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-img-container">
            <img src="./ECommerce.png" className="card-img-top" alt="E-Commerce Website" />
            <a
              href="https://github.com/frankcastle026/E-Commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn2"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">E-Commerce Website</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
