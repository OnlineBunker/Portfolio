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

  // Detect scroll to switch button icon
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
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (atAbout) {
      // Scroll to very top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to "about" section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
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
            <button className="get-start">View Projects →</button>
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
    </div>
  );
}
