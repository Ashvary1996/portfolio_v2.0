import { majorProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = majorProjects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = majorProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <p className="mb-6 text-muted-foreground">{project.description}</p>

      <a
        href={`/projects/${project.slug}/gallery`}
        className="underline text-blue-600"
      >
        View Full Gallery →
      </a>
    </div>
  );
}
