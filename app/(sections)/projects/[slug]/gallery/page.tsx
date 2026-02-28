import { majorProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { LayoutGrid } from "@/components/ui/layout-grid";

import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const project = majorProjects.find((p) => p.slug === slug);

  console.log("project", project);
  if (!project) return notFound();
  const images = project.images ?? [];
  // Convert images into LayoutGrid card format
  const cards = images.map((img, index) => ({
    id: index + 1,
    content: (
      <div className="text-white">
        <p className="text-lg md:text-xl font-semibold">{img.title}</p>
        <p className="text-sm text-gray-300 mt-1">Screenshot {index + 1}</p>
      </div>
    ),
    className: index % 3 === 0 ? "md:col-span-2" : "col-span-1",
    thumbnail: img.src,
  }));

  return (
    <>
      <header className="sticky top-0 z-30 bg-white shadow-md py-4 px-6 md:px-16 flex items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition"
        >
          <BiArrowBack size={24} />
          Back to Projects
        </Link>
        {/* <h2 className="ml-auto text-gray-800 font-semibold text-lg md:text-xl">
          {project.title}
        </h2> */}
      </header>
      <div className="px-4 md:px-16 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
          {project.title} – Gallery
        </h1>
        <div className="h-screen py-20 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </>
  );
}
