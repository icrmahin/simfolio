import CaseStudy from "@/components/projects/case-study/CaseStudy";
import { getProject, projects } from "@/components/projects/project-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project" };

  const description = project.overview ?? project.description;

  return {
    title: `${project.title} — A. Mahin`,
    description,
    openGraph: {
      title: project.title,
      description,
      type: "article",
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <CaseStudy project={project} />;
}
