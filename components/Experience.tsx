type Project = {
  title: string;
  role: string;
  year: string;
};

// Project content
const projects: Project[] = [
  {
    title: "Dataxpie",
    role: "Wordpress Developer",
    year: "2023",
  },
  {
    title: "DigitalPathways",
    role: "Full Stack",
    year: "2024",
  },
  {
    title: "Visqode",
    role: "Product Engineer",
    year: "2025",
  },
];

// Reusable project item
function ProjectItem({ title, role, year }: Project) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 border-b border-neutral-400/40 py-4 text-sm sm:grid-cols-[minmax(0,1fr)_1fr_auto] sm:items-center">
      <h3 className="col-start-1 row-start-1 min-w-0 truncate text-neutral-900">
        {title}
      </h3>

      <p className="col-span-2 col-start-1 row-start-2 min-w-0 truncate text-neutral-500 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:text-neutral-600">
        {role}
      </p>

      <span className="col-start-2 row-start-1 justify-self-end text-neutral-400 sm:col-start-3">
        {year}
      </span>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900">
        My Path Here
      </h2>

      {/* Render project items from the data above */}
      <div className="w-full">
        {projects.map((project) => (
          <ProjectItem
            key={`${project.title}-${project.year}`}
            title={project.title}
            role={project.role}
            year={project.year}
          />
        ))}
      </div>
    </section>
  );
}