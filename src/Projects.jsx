import React from 'react';
import './Projects.css';

function Project() {
  return (
    <div id="projects">
      <div className="projects-container">
        <h3 className="projects-header">P R O J E C T S</h3>
        <div className="projects-cards">
          <div className="card">
            <div className="card-img-container">
              <img src="./Notes.jpg" className="card-img-top" alt="Personalised Notes Blog" />
              <a
                href="https://github.com/frankcastle026/Personalised_notes_blog"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn for-projects"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Personalised Notes Blog</h5>
            </div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="./ECommerce.png" className="card-img-top" alt="E-Commerce Website" />
              <a
                href="https://github.com/frankcastle026/E-Commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn for-projects"
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
    </div>
  );
}

export default Project;
