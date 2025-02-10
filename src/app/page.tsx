import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-bold">
        Hello there! I&apos;m Salah Shaalaan
      </Heading>
      <Paragraph className="max-w-xl mt-4 text-[#1B2A4E]">
        I&apos;m a full-stack developer that loves
        <Highlight>building products</Highlight> and web apps that solve real
        problems and make a meaningful difference for users.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-[#1B2A4E]">
        <Highlight>5 years in the game</Highlight> , and I’m still obsessed with
        building web apps that are fast, smooth, and look awesome.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
