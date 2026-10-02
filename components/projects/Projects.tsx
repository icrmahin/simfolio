import ProjectCard from "./ProjectCard";
import { projects } from "./project-data";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-16 sm:px-8 sm:py-24">
      {/* Section heading */}
      <div className="mb-6">
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900">
          Projects
        </h2>
      </div>

      {/* Project cards */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}