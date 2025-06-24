import React, { useState, useEffect } from 'react';
import './homepage.css';

export default function Homepage() {
  const text = "Hi, I'm Yash Dhankhar";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [atAbout, setAtAbout] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const scrollY = window.scrollY + window.innerHeight / 2;
      if (aboutSection && scrollY >= aboutSection.offsetTop) {
        setAtAbout(true);
      } else {
        setAtAbout(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (atAbout) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  };


  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      <div id="hero" className="hero">
        <div className="hero-content">
          <h1>
            {displayedText}
            <span className="cursor"></span>
          </h1>
          <p>Aspiring CS & AI Engineer | Web Developer | Data Analyst</p>
          <div className="hero-buttons">
            <button className="get-start" onClick={scrollToProjects}>View Projects →</button>
            <button className="get-start scroll-down" onClick={handleScrollClick}>
              {atAbout ? '↑' : '↓'}
            </button>
          </div>
        </div>
      </div>

      <div id="about" className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Yash Dhankhar, currently pursuing B.Tech in Computer Science and Artificial Intelligence at Newton School of Technology. Over time, 
          I’ve developed a deep interest in AI and Machine Learning, 
          which I actively explore as a member of my college’s AI Club. My academic journey has been shaped by curiosity, consistency, and a strong inclination toward technology-driven problem-solving. 
          I’ve also taken part in leadership roles during school and college events, which helped me grow as a communicator and team player. 
          I'm now focused on building meaningful projects and gaining practical experience in the AI and tech space.
        </p>
      </div>

      <div id="timeline" className="timeline-section">
        <h2>Timeline</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="date">2021 – 2022</span>
              <h3>10th Grade (CBSE)</h3>
              <p>Rajkiya Pratibha Vikas Vidalaya</p>
              <p>Scored 94% overall, including 100% in Mathematics. 
                Developed a strong foundation in Math and Science. 
                Demonstrated leadership by directing a play for the Annual Day event.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="date">2023 – 2024</span>
              <h3>12th Grade (CBSE) (PCM + CS)</h3>
              <p>Rajkiya Pratibha Vikas Vidalaya</p>
              <p>Scored 85% overall. 
                Discovered a strong interest in Computer Science and decided to pursue it further. 
                Demonstrated true leadership by serving on the core committee responsible for executing the Annual Day event.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="date">2024 – Present</span>
              <h3>B.Tech in Computer Science and Artificial Intelligence</h3>
              <p>Newton School of Technology</p>
              <p>Scored an 8.5 CGPA in my first year. 
                Realized my passion for Artificial Intelligence and Machine Learning within Computer Science, 
                which led me to join the college's AI Club. I am currently exploring and pursuing this passion actively.</p>
            </div>
          </div>
        </div>
      </div>


      <div id="projects" className="projects-section">
        <h2>Top-3 Projects <br />
          <small style={{ fontWeight: "normal", fontSize: "0.85rem", color: "grey" }}>
        (Click on any project card to visit its live demo or source code.)
      </small>
        </h2>
        <div className="projects-cards">
          <a
            href="https://global-immigration-dashboard.streamlit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="project-card">
              <h3>Global Immigration Dashboard</h3>
              <p className="short-desc">
                An interactive Streamlit app to explore and analyze immigration data from 1960 to 2024. Visualize trends, compare countries, and view custom plots with a user-friendly interface.
              </p>
              <p className="tech-used">Tech used: Streamlit, Python, Pandas, Plotly</p>
            </div>
          </a>

          <a
            href="https://github.com/OnlineBunker/crypto-lagged-correlation-strategy"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="project-card">
              <h3>Crypto Trading Strategy Based on Lagged Correlation</h3>
              <p className="short-desc">
                Analyzes BTC and MATIC price correlations to generate buy/sell signals with backtesting results. Achieved ~$178.87 profit over historical period from 2019 to 2021.
              </p>
              <p className="tech-used">Tech used: Python, Pandas, NumPy, Backtrader</p>
            </div>
          </a>

          <a
            href="https://github.com/OnlineBunker/linear-regression"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="project-card">
              <h3>Linear Regression from Scratch</h3>
              <p className="short-desc">
                Simple Python implementation of linear regression using gradient descent to predict exam scores based on study hours, including error tracking and plots.
              </p>
              <p className="tech-used">Tech used: Python, NumPy, Matplotlib</p>
            </div>
          </a>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Me</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/xblyzbkg"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="contact-inputs">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea
            name="message"
            placeholder="How can I help? Please include rough scope, budget, timeframe, etc."
            rows="5"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>


    </div>
  );
}
