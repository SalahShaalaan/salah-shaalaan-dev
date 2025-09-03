import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { FigmaProjects } from "@/components/FigmaProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Salah Shaalaan",
  description:
    "Explore my portfolio of full-stack web applications built with MERN Stack, Next.js, and TypeScript. Featured projects include real estate platforms, healthcare systems, and enterprise dashboards - demonstrating expertise in building secure, scalable, and user-friendly solutions.",
};

export default function Projects() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-10 py-20">
        <span className="text-4xl">⚡</span>
        <Heading className="font-black mb-10">
          What I&apos;ve been working on
        </Heading>
      </div>

      {/* Grid Layout for Two Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10 pb-20">
        {/* Full-Stack Projects Section */}
        <div className="space-y-6">
          <Heading
            as="h2"
            className="font-black text-lg md:text-lg lg:text-lg mb-6"
          >
            Full-Stack Applications
          </Heading>
          <Products />
        </div>

        {/* Design to Code Projects Section */}
        <div className="space-y-6">
          <Heading
            as="h2"
            className="font-black text-lg md:text-lg lg:text-lg mb-6"
          >
            Figma to Code Projects
          </Heading>
          <FigmaProjects />
        </div>
      </div>
    </div>
  );
}
