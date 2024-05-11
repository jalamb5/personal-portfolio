import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";

export function renderProjects() {
  const app = document.getElementById("project-list");
  projects.forEach((project) => {
    const projectCard = ProjectCard(project);
    app.appendChild(projectCard);
  });
}

