import { majorProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import BackButton from "./BackButtonProject";
import ImageGallery from "./ImageGallery";

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm py-4 px-4 md:px-16 flex items-center dark:bg-gray-900/80">
        <BackButton />
      </header>

      {/* Content */}
      <main className="px-4 md:px-16 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          {project.title} – Gallery
        </h1>

        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p className="text-gray-500 text-lg">
            No images available for this project.
          </p>
        )}
      </main>
    </div>
  );
}
