import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-bold">Hey, I&apos;m Salah Shaalaan</Heading>
      <Paragraph className="max-w-xl mt-4">
        I build things for the web — mostly frontend stuff that looks clean and
        feels smooth. Love turning ideas into interactive experiences
        <Highlight>I'm on my way of being MERN Developer</Highlight> and trying
        to figure out how to build full apps from start to finish.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I'm all about <Highlight>bringing designs to life</Highlight> and making
        interfaces that actually feel good to use — not just work. Currently
        diving into backend stuff and databases, basically trying to become a
        full-stack developer.
      </Paragraph>
      <TechStack />
    </Container>
  );
}
