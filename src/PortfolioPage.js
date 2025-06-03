import React from 'react';
import './PortfolioPage.css';

function PortfolioPage() {
  return (
    <div className="portfolio">
      <h1>BHOOMIKA D M</h1>
      <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      <p className="title">Frontend Developer | React Enthusiast</p>

      <section>
        <h2>About Me</h2>
        <p>
          I’m a detail-oriented Frontend Developer with 2+ years of experience building dynamic, responsive web applications using React.js. I enjoy transforming complex ideas into clean, user-friendly interfaces.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <ul>
          <li><strong>Email:</strong> bhoomikadm2004@gmail.com</li>
          <li><strong>Phone:</strong> +91 8217407146</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/bhoomika" target="_blank" rel="noreferrer">github.com/bhoomika</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/bhoomika" target="_blank" rel="noreferrer">linkedin.com/in/bhoomika</a></li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>B.Sc. Computer Science</strong>, MALNAD COLLEGE OF ENGINEERING 2022 - 26</p>
        <p>CGPA: 8.7/10</p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <p><strong>Frontend Developer Intern</strong></p>
        <ul>
          <li>Built responsive UI components using React and Tailwind CSS</li>
          <li>Integrated REST APIs and handled state using Redux</li>
          <li>Collaborated with backend developers using Git and Agile tools</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <p><strong>Portfolio Website</strong> – A personal portfolio built with React, hosted on GitHub Pages.</p>
        <p><strong>MCE STUDENT COMPANION</strong> – All in one website .</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>Node.js (basic)</li>
        </ul>
      </section>
    </div>
  );
}

export default PortfolioPage;
