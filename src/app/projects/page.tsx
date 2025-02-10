import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Salah Shaalaan",
  description:
    "Explore my portfolio of full-stack web applications built with MERN Stack, Next.js, and TypeScript. Featured projects include real estate platforms, healthcare systems, and enterprise dashboards - demonstrating expertise in building secure, scalable, and user-friendly solutions.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        What I&apos;ve been working on
      </Heading>

      <Products />
    </Container>
  );
}
