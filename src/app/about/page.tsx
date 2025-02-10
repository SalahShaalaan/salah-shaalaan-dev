import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Salah Shaalaan",
  description:
    "Senior Full Stack Developer with 5+ years of experience crafting robust web solutions using MERN Stack. Expert in building scalable applications, API development, and cloud infrastructure. Passionate about clean code, performance optimization, and delivering exceptional user experiences.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
