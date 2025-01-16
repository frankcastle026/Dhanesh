import React, { useState } from 'react';
import './Nav.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Nav() {
  // State to manage the sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dhanesh
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar} // Toggle sidebar when clicked
            aria-expanded={sidebarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="ms-auto d-flex align-items-center">
            <a
                href="mailto:ndhanesh026@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn me-2"
              >
                <i className="bi bi-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dhanesh-n-75ba50267/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn me-2"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/frankcastle026"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <a href="#About" onClick={() => setSidebarOpen(false)}>ABOUT</a>
        <a href="#skills" onClick={() => setSidebarOpen(false)}>SKILLS</a>
        <a href="#projects" onClick={() => setSidebarOpen(false)}>PROJECTS</a>
        <a href="#Contact" onClick={() => setSidebarOpen(false)}>CONTACT</a>
        <div className="social-buttons">
        <a
            href="mailto:ndhanesh026@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/dhanesh-n-75ba50267/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/frankcastle026"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
