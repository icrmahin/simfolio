export type ProjectStatus =
  | "Completed"
  | "In progress"
  | "Archived"
  | "Concept"
  | "Experimental"
  | "Maintained";

export type ProjectLinkKind =
  | "live"
  | "github"
  | "press"
  | "prototype"
  | "app"
  | "article";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

/**
 * Sections are declared per project, in narrative order. There is no fixed
 * template — each project lists only the beats it actually has. A section
 * whose payload is empty renders nothing, so unfinished sections can stay in
 * the data as scaffolding without leaking placeholders onto the page.
 */
export type ProjectSection =
  | TextSection
  | ImageSection
  | GallerySection
  | SplitSection
  | QuoteSection
  | MetricsSection
  | ListSection
  | DecisionSection
  | VersionSection;

export interface TextSection {
  type: "text";
  title?: string;
  kicker?: string;
  paragraphs?: string[];
}

export interface ImageSection {
  type: "image";
  title?: string;
  image?: ProjectImage;
  /** Reading width stays legible; wide breaks out to the full content column. */
  width?: "reading" | "wide";
}

export interface GallerySection {
  type: "gallery";
  title?: string;
  columns?: 2 | 3;
  images?: ProjectImage[];
}

export interface SplitSection {
  type: "split";
  title?: string;
  paragraphs?: string[];
  image?: ProjectImage;
  side?: "left" | "right";
}

export interface QuoteSection {
  type: "quote";
  text?: string;
  attribution?: string;
}

export interface MetricsSection {
  type: "metrics";
  title?: string;
  items?: { label: string; value: string }[];
}

export interface ListSection {
  type: "list";
  title?: string;
  items?: string[];
}

export interface DecisionSection {
  type: "decisions";
  title?: string;
  decisions?: {
    decision: string;
    reason?: string;
    tradeOff?: string;
    result?: string;
  }[];
}

export interface VersionSection {
  type: "versions";
  title?: string;
  versions?: {
    label: string;
    date?: string;
    title?: string;
    description?: string;
    image?: ProjectImage;
    changes?: { what: string; why: string }[];
  }[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  /** Cover image, also used for Open Graph. */
  image: string;
  overview?: string;
  year?: string;
  role?: string;
  status?: ProjectStatus;
  client?: string;
  team?: string[];
  timeline?: string;
  category?: string;
  tools?: string[];
  links?: ProjectLink[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "pathao-connect",
    title: "Pathao Connect",
    description:
      "Formalizing street side bike rides without changing their nature and making them safer.",
    image: "/projects/pathao-connect.png",
    overview:
      "Placeholder overview — one or two sentences describing the project in plain language. This is the short summary that sits under the cover image.",
    year: "2024",
    role: "Product design and engineering",
    status: "Completed",
    category: "Mobility",
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Figma"],
    sections: [
      {
        type: "text",
        kicker: "Background",
        title: "Placeholder context paragraph",
        paragraphs: [
          "Placeholder paragraph — describe the situation that made this project necessary. What existed before, who it served, and why the current approach was not enough.",
          "Placeholder paragraph — a second paragraph for context. Keep it short; long blocks of copy belong in a quote or split section instead.",
        ],
      },
      {
        type: "metrics",
        title: "Outcome at a glance",
        items: [
          { label: "Placeholder metric 1", value: "00%" },
          { label: "Placeholder metric 2", value: "00" },
          { label: "Placeholder metric 3", value: "00k" },
        ],
      },
      {
        type: "quote",
        text: "Placeholder quote — a sentence a participant or client said, kept short and verbatim.",
        attribution: "Placeholder attribution",
      },
      {
        type: "decisions",
        title: "Decisions that shaped it",
        decisions: [
          {
            decision: "Placeholder decision one",
            reason: "Why this option was chosen over the alternatives.",
            tradeOff: "What this option cost us.",
            result: "What it enabled once shipped.",
          },
          {
            decision: "Placeholder decision two",
            reason: "Why this option was chosen over the alternatives.",
            tradeOff: "What this option cost us.",
            result: "What it enabled once shipped.",
          },
        ],
      },
      {
        type: "gallery",
        title: "Screens",
        columns: 2,
        images: [
          {
            src: "/projects/detail-01.png",
            alt: "Placeholder screenshot of an early exploration",
            caption: "Placeholder caption — early exploration.",
          },
          {
            src: "/projects/detail-02.png",
            alt: "Placeholder screenshot of a rejected direction",
            caption: "Placeholder caption — a direction that did not survive.",
          },
          {
            src: "/projects/detail-03.png",
            alt: "Placeholder screenshot of the direction that shipped",
            caption: "Placeholder caption — the direction that shipped.",
          },
          {
            src: "/projects/detail-01.png",
            alt: "Placeholder screenshot of a secondary view",
            caption: "Placeholder caption — a secondary view.",
          },
        ],
      },
      {
        type: "split",
        title: "A problem worth showing",
        side: "right",
        paragraphs: [
          "Placeholder paragraph — pair one idea with one image. Use this when the picture carries half the explanation.",
        ],
        image: {
          src: "/projects/detail-03.png",
          alt: "Placeholder image beside a short block of text",
          caption: "Placeholder caption.",
        },
      },
      {
        type: "versions",
        title: "How it changed over time",
        versions: [
          {
            label: "V1",
            date: "Month Year",
            title: "Placeholder release title",
            description: "Placeholder description of what this release introduced.",
            changes: [
              { what: "Placeholder change", why: "Placeholder reason" },
              { what: "Placeholder change", why: "Placeholder reason" },
            ],
          },
          {
            label: "V2",
            date: "Month Year",
            title: "Placeholder release title",
            description: "Placeholder description of what this release changed.",
            image: {
              src: "/projects/detail-02.png",
              alt: "Placeholder image for the second release",
            },
          },
        ],
      },
      {
        type: "list",
        title: "What it runs on",
        items: [
          "Placeholder stack item",
          "Placeholder stack item",
          "Placeholder stack item",
        ],
      },
    ],
  },
  {
    slug: "hibbullah",
    title: "Hibbullah Pharmacy",
    description:
      "A simple pharmacy experience focused on product discovery and ordering.",
    image: "/projects/hibbullah.png",
    overview:
      "Placeholder overview — a short plain-language summary of the project, shown under the cover image.",
    year: "2024",
    role: "Product design and engineering",
    status: "Completed",
    category: "Commerce",
    tools: ["Next.js", "TypeScript", "Stripe", "Figma"],
    sections: [
      {
        type: "text",
        kicker: "Context",
        title: "Placeholder framing paragraph",
        paragraphs: [
          "Placeholder paragraph — describe who this was for and what they were trying to do when they arrived.",
          "Placeholder paragraph — the shape of the problem before any solution was considered.",
        ],
      },
      {
        type: "split",
        title: "Where people got stuck",
        side: "left",
        paragraphs: [
          "Placeholder paragraph — the specific friction this project set out to remove. One idea, one image.",
        ],
        image: {
          src: "/projects/detail-01.png",
          alt: "Placeholder image of the ordering flow",
          caption: "Placeholder caption — the ordering flow.",
        },
      },
      {
        type: "gallery",
        title: "Product pages",
        columns: 3,
        images: [
          {
            src: "/projects/detail-01.png",
            alt: "Placeholder product listing",
            caption: "Placeholder caption — listing.",
          },
          {
            src: "/projects/detail-02.png",
            alt: "Placeholder product detail view",
            caption: "Placeholder caption — detail view.",
          },
          {
            src: "/projects/detail-03.png",
            alt: "Placeholder cart view",
            caption: "Placeholder caption — cart.",
          },
        ],
      },
      {
        type: "metrics",
        title: "What changed",
        items: [
          { label: "Placeholder metric 1", value: "00%" },
          { label: "Placeholder metric 2", value: "00" },
        ],
      },
      {
        type: "decisions",
        title: "Decisions",
        decisions: [
          {
            decision: "Placeholder decision",
            reason: "Placeholder reason for choosing it.",
            tradeOff: "Placeholder trade-off accepted.",
          },
        ],
      },
      {
        type: "quote",
        text: "Placeholder quote — one line that captures the outcome.",
        attribution: "Placeholder attribution",
      },
      {
        type: "text",
        title: "Placeholder closing paragraph",
        paragraphs: [
          "Placeholder paragraph — close the story with the current state and anything still in progress.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** Wraps around the list; null when the slug is unknown or there is nothing to switch to. */
export function getAdjacentProjects(
  slug: string,
): { previous: Project; next: Project } | null {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1 || projects.length < 2) return null;

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}