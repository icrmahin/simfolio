import type { Project } from "../project-data";

interface ProjectMetaProps {
  project: Project;
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
  const fields: { label: string; value: string }[] = [];

  if (project.role) fields.push({ label: "Role", value: project.role });
  if (project.year) fields.push({ label: "Year", value: project.year });
  if (project.status) fields.push({ label: "Status", value: project.status });
  if (project.timeline) fields.push({ label: "Timeline", value: project.timeline });
  if (project.category) fields.push({ label: "Category", value: project.category });
  if (project.client) fields.push({ label: "Client", value: project.client });
  if (project.team && project.team.length > 0) {
    fields.push({ label: "Team", value: project.team.join(", ") });
  }

  if (fields.length === 0) return null;

  return (
    <dl className="grid gap-x-8 sm:grid-cols-2">
      {fields.map((field) => (
        <div
          key={field.label}
          className="flex items-baseline justify-between gap-4 border-b border-neutral-400/40 py-3"
        >
          <dt className="shrink-0 text-sm text-neutral-500">{field.label}</dt>
          <dd className="min-w-0 text-right text-sm text-neutral-900">
            {field.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}