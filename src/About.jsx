import React from 'react';
import './About.css';

function About() {
  return (
    <div id="About" style={{ marginTop: '70px' }}>
      <section id="about" style={{ padding: '50px', textAlign: 'center' }}>
        <h1>
          Hi! I'm <span className="name">Dhanesh</span> <br /> <br />
          <div>A Full Stack Web Developer</div>
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
            From designing seamless user interfaces to developing robust backend systems, I am committed to delivering exceptional digital experiences that stand out. I’m currently open to freelance opportunities in web design and development, ready to transform your ideas into impactful, high-quality projects. Together, let’s create solutions that leave a lasting impression!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
