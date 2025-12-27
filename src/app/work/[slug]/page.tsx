import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Interface for type safety
interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  src: string;
  gallery: string[];
  videos?: string[];
}

// Correctly typing params for Next.js 15+ App Router
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) {
    notFound();
  }

  // Find next project for the footer link
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-obsidian text-mist selection:bg-mist selection:text-obsidian">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full mt-24 px-4 md:px-10 mb-20">
        <div className="w-full h-full relative overflow-hidden rounded-lg">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 z-20">
             <h1 className="text-[10vw] font-serif leading-none">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-4 md:px-10 mb-32 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 flex flex-col gap-8 text-sm uppercase tracking-widest opacity-80">
          <div>
            <span className="block text-mist/40 mb-2">Client</span>
            <span>{project.client}</span>
          </div>
          <div>
            <span className="block text-mist/40 mb-2">Year</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span className="block text-mist/40 mb-2">Services</span>
            <span>{project.category}</span>
          </div>
        </div>

        <div className="md:col-span-8">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight indent-20">
            {project.description}
          </h2>
          <p className="mt-10 text-lg opacity-60 max-w-2xl leading-relaxed">
            Every project starts with a question. For {project.client}, the question was how to visualize the invisible. We approached this by stripping away the non-essential, leaving only the raw emotion and structural integrity of the brand.
          </p>
        </div>
      </section>

      {/* Gallery (Images) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-4 md:px-10 mb-32 flex flex-col gap-10">
          {project.gallery.map((img, i) => (
            <div key={i} className="relative w-full h-[60vh] md:h-[100vh]">
              <Image
                src={img}
                alt={`${project.title} detail ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </section>
      )}

      {/* Video Gallery */}
      {project.videos && project.videos.length > 0 && (
        <section className="px-4 md:px-10 mb-32">
          <h3 className="text-2xl font-serif mb-10 border-b border-mist/20 pb-4">Video Productions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.videos.map((videoUrl, i) => (
              <div key={i} className="relative w-full aspect-video rounded-lg overflow-hidden bg-mist/5">
                <iframe
                  src={`${videoUrl}?rel=0&showinfo=0&color=white`}
                  title={`${project.title} Video ${i + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="px-4 md:px-10 py-32 border-t border-mist/20 flex flex-col items-center justify-center text-center">
        <span className="uppercase tracking-widest text-sm mb-4 opacity-50">Next Case</span>
        <Link href={`/work/${nextProject.slug}`} className="group">
          <h2 className="text-[8vw] font-serif leading-none group-hover:italic transition-all duration-300">
            {nextProject.title}
          </h2>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
