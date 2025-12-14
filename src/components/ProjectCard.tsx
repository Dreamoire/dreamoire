import type { Project } from "../data/projects";
import "../styles/ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img
        src={project.imageSrc}
        alt={`Aperçu du projet ${project.title}`}
        className="project-card__image"
        loading="lazy"
      />
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDescription}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
