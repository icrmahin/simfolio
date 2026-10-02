import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "./project-data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="relative aspect-square overflow-hidden rounded-[28px] bg-neutral-200">
      {/* Project image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 336px"
        className="object-cover"
      />

      {/* Soft gradient for content readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Project information */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white sm:gap-6 sm:p-5">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>

          <p className="mt-1 max-w-md text-sm leading-relaxed text-white/75">
            {project.description}
          </p>
        </div>

        {/* View project */}
        <span
          aria-hidden="true"
          className="pointer-events-none flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-black"
        >
          View
          <ArrowUpRight size={16} strokeWidth={2} />
        </span>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-500"
      >
        <span className="sr-only">View {project.title}</span>
      </Link>
    </article>
  );
}