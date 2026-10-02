import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../project-data";
import { getAdjacentProjects } from "../project-data";
import CaseStudySection from "./CaseStudySection";
import ProjectLinks from "./ProjectLinks";
import ProjectMeta from "./ProjectMeta";

function ProjectNav({ project }: { project: Project }) {
  const adjacent = getAdjacentProjects(project.slug);
  if (!adjacent) return null;

  const { previous, next } = adjacent;

  return (
    <nav
      aria-label="Project navigation"
      className="border-t border-neutral-200"
    >
      {[
        { entry: previous, label: "Previous", align: "start", Icon: ArrowLeft },
        { entry: next, label: "Next", align: "end", Icon: ArrowRight },
      ].map(({ entry, label, align, Icon }) => (
        <Link
          key={label}
          href={`/projects/${entry.slug}`}
          aria-label={`${label} project: ${entry.title}`}
          className="flex items-center gap-3 border-b border-neutral-200 py-4 text-sm transition-colors duration-150 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
        >
          {align === "start" ? (
            <Icon
              size={15}
              strokeWidth={1.75}
              aria-hidden="true"
              className="shrink-0 text-neutral-400"
            />
          ) : null}

          <span className="min-w-0 flex-1 truncate text-neutral-900">
            {entry.title}
          </span>

          {align === "end" ? (
            <Icon
              size={15}
              strokeWidth={1.75}
              aria-hidden="true"
              className="shrink-0 text-neutral-400"
            />
          ) : null}
        </Link>
      ))}
    </nav>
  );
}

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8">
      <Link
        href="/#projects"
        className="-mx-1 inline-flex items-center gap-1.5 rounded-lg px-1 py-2.5 text-sm text-neutral-500 transition-colors duration-150 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      >
        <ArrowLeft size={15} strokeWidth={1.75} aria-hidden="true" />
        <span>Back to projects</span>
      </Link>

      <header className="mt-6">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {project.title}
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
          {project.overview ?? project.description}
        </p>

        <div className="relative mt-6 aspect-[3/2] w-full overflow-hidden rounded-2xl bg-neutral-200 sm:mt-8 sm:aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 704px"
            className="object-cover"
          />
        </div>

        <div className="mt-6 sm:mt-8">
          <ProjectMeta project={project} />
        </div>
      </header>

      {project.sections.length > 0 ? (
        <div className="mt-14 space-y-14 sm:mt-20 sm:space-y-20">
          {project.sections.map((section, index) => (
            <CaseStudySection key={index} section={section} />
          ))}
        </div>
      ) : null}

      {project.links && project.links.length > 0 ? (
        <div className="mt-14 sm:mt-20">
          <ProjectLinks links={project.links} />
        </div>
      ) : null}

      <div className="mt-14 sm:mt-20">
        <ProjectNav project={project} />
      </div>
    </article>
  );
}
