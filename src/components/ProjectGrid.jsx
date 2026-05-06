import { projects } from "./ProjectList";
import ProjectCard from "./ProjectCard";
import "./ProjectGrid.css";

export default function ProjectGrid() {
  return (
    <section className="projects-section" id="projects">
      <p className="section-eyebrow">03 ✦ PROJECTS</p>
      <h2 className="projects-heading">SELECTED<br />WORK</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
