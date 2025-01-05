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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-gear-wide-connected"
              viewBox="0 0 16 16"
            >
              <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
            </svg>
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
