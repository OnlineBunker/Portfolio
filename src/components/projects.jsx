import './projects.css';
import projects_data from '../api/projectData.jsx';

export default function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {Object.entries(projects_data).map(([key, project]) => (
                    <div className="project-card" key={key}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tech Used:</strong> {project.techUsed}</p>
                        <div className="project-buttons">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">Code</a>
                            {project.liveDemo && (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
