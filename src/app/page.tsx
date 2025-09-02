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
      <Heading className="font-bold">Hey, I&apos;m Salah Shaalaan</Heading>
      <Paragraph className="max-w-xl mt-4 text-[#1B2A4E]">
        I build things for the web — mostly frontend stuff that looks clean and
        feels smooth.
        <Highlight>Love turning ideas into interactive experiences</Highlight>.
        If I'm not coding, I’m probably digging into new tech or just figuring
        out how things work behind the scenes.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-[#1B2A4E]">
        I’m all about <Highlight>bringing designs to life</Highlight> and making
        interfaces that actually feel good to use — not just work. Right now,
        I’m leveling up my frontend skills while messing around with everything
        else in the dev world.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Some Projects I&apos;ve Worked On
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
