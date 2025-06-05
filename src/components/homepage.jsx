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
      window.scrollTo({ top: 500, behavior: 'smooth' }); // scroll only 500px
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
          I’m a passionate Computer Science & AI student, focused on building
          clean, efficient, and intelligent web experiences. I love exploring
          new technologies, solving real-world problems, and constantly pushing
          the boundaries of what’s possible with code.
        </p>
      </div>

      <div id="projects" className="projects-section">
        <h2>Projects <br />
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

    </div>
  );
}
