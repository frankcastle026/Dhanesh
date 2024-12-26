import React from 'react';
import EmailForm from './email.jsx';
import Nav from './Nav.jsx';
import About from './About.jsx';
import './App.css';
import Project from './Projects.jsx';
import Skills from './Skills.jsx';

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Skills />
      <EmailForm />
      
    </div>
  );
}

export default App;
