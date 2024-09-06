import { techIcons } from "./data";

export function ProjectCard(project) {
  const card = document.createElement("li");
  card.classList.add(
    "project",
    "p-8",
    "flex",
    "flex-col",
    "sm:flex-row",
    "justify-center"
  );

  const techIconsHtml = project.tech
    .map((techName) => {
      const techIcon = techIcons.find((tech) => tech.name === techName);
      return techIcon ? techIcon.icon : "";
    })
    .join(" ");

  const liveHtml = () => {
    if (project.live) {
      return `<a href=${project.live} class="text-jl-purple bg-light border-solid border-2 border-jl-purple hover:bg-purple-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-2 py-0.5">Live</a>`;
    } else {
      return "";
    }
  };

  // Construct HTML for project card using project data
  card.innerHTML = `
        <img src=${project.image} alt=${project.imageAlt}" class="sm:w-2/5 rounded hover:scale-110 duration-500">
        <div class="pl-8 flex flex-col justify-between sm:w-3/5">
          <h2 class="text-2xl font-bold pb-2 text-jl-purple ">${project.title}</h2>
          <p class=" text-secondary font-light">${project.description}</p>
          <div>
            <h3 class="text-secondary text-sm">Tech</h3>
            <p class="text-icons opacity-75 pb-2">
              ${techIconsHtml}
            </p>
          <div class="flex items-center space-x-4">
            <a href=${project.link} class="text-jl-purple bg-light border-solid border-2 border-jl-purple hover:bg-purple-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-2 py-0.5">Code</a>
            ${liveHtml()}
          </div>
        </div>
      </div>
  `;
  return card;
}
