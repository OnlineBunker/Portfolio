import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-icon">©</span> Yash Dhankhar
        </div>
        <div className="social-links">
          <a href="https://github.com/onlinebunker" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img className="social-icon git" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>
          <a href="https://instagram.com/yash_d_dhankhar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img className="social-icon" src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" />
          </a>
          <a href="https://linkedin.com/in/yash-d-dhankhar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img className="social-icon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
          <a href="mailto:yash.dhankhar06@gmail.com" aria-label="Email">
            <img className="social-icon mail" src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}
