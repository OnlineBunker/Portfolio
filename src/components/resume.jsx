import './resume.css'
export default function Resume() {
  return (
    <div
      style={{
        width: '100%',
        height: '140vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
      }}
    >
      <h1>Resume</h1>
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <a href="/resume.pdf" download="YashDhankhar_Resume.pdf">
          <button className="download-btn">
            Download Resume
          </button>
        </a>
      </div>
      <iframe
        src="/resume.pdf"
        title="Yash Dhankhar Resume"
        width="90%"
        height="150%"
        style={{ border: 'none', maxWidth: '80%', flexGrow: 1, marginBottom: '2rem' }}
      />
    </div>
  );
}
