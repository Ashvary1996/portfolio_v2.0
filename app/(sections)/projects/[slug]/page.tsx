import { majorProjects } from "@/data/projectData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BackButton from "./gallery/BackButtonProject";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

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
    <>
     <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm py-4 px-4 md:px-16 flex items-center dark:bg-gray-900/80 justify-between">
        <BackButton />
        <AnimatedThemeToggler />
      </header>
    <div className="max-w-5xl mx-auto px-6 py-16">
     
      <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl">
          {project.description}
        </p>

        {/* Button */}
        <Link
          href={`/projects/${project.slug}/gallery`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white hover:bg-neutral-800 transition-all duration-300 hover:translate-x-1"
        >
          View Full Gallery
          <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
    </>
  );
}
