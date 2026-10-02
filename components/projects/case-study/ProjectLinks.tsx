import { ArrowUpRight } from "lucide-react";
import type { ProjectLink } from "../project-data";

export default function ProjectLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;

  return (
    <nav aria-label="Project links" className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-neutral-500 transition-colors duration-150 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
        >
          <span>{link.label}</span>
          <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
