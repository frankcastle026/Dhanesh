import React from 'react';
import './About.css';

function About() {
  return (
    <div id="About" style={{ marginTop: '70px' }}>
      <section id="about" style={{ padding: '50px', textAlign: 'center' }}>
        <h1>
          Hi! I'm <span className="name">Dhanesh</span> <br />
          <div class="Developer">A Full Stack Web Developer</div>
        </h1>
        <div className="aboutme">
          <h5 className="h3header">ABOUT ME</h5>
        </div>
        <div className="para">
          <p>
            Pioneering the fusion of creativity and technology, I specialize in crafting modern, functional, and user-friendly web experiences. As a Computer Science Engineering student with a focus on Artificial Intelligence and Machine Learning (AIML) at SRM University.
          </p>
          <p>
            I combine technical expertise with a passion for web design and development. By staying updated on emerging technologies and trends, I ensure my solutions are innovative and cutting-edge.
          </p>
          <p>
          I specialize in creating seamless user interfaces and robust backend systems. Open to freelance opportunities in web design and development, I'm eager to transform your ideas into high-quality, impactful digital solutions.          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
