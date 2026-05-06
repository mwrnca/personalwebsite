import "./ProjectCard.css";

export default function ProjectCard({ title, description, tags, github, live }) {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="card-link">
              GH ↗
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="card-link card-link--live">
              LIVE ↗
            </a>
          )}
        </div>
      </div>

      <p className="card-desc">{description}</p>

      <div className="card-tags">
        {tags.map((tag) => (
          <span key={tag} className="card-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
