import './resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <div className="resume-actions">
        <a href="/resume.pdf" download="YashDhankhar_Resume.pdf">
          <button className="download-btn">Download Resume</button>
        </a>
        {/* Fallback message for mobile */}
        <p className="mobile-note">
          PDF preview not supported on mobile. Please download to view.
        </p>
      </div>

      {/* PDF iframe - hidden on small screens */}
      <iframe
        src="/resume.pdf"
        title="Yash Dhankhar Resume"
        className="resume-iframe"
      />
    </div>
  );
}
