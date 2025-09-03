"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import about1 from "../../public/images/about-1.jpeg";
import about2 from "../../public/images/about-2.jpeg";
import about3 from "../../public/images/about-3.jpeg";
import about4 from "../../public/images/about-4.jpeg";
import { motion } from "framer-motion";

export default function About() {
  const images = [about1, about2, about3, about4];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={300}
              height={600}
              quality={100}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              placeholder="blur"
              blurDataURL="/blur.jpg"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey! I&apos;m Salah, a frontend developer who&apos;s been in this game
          for over 5 years now. What started as curiosity about how websites
          work has turned into a full-blown passion for building cool stuff on
          the web.
        </Paragraph>

        <Paragraph className=" mt-4">
          I&apos;ve spent most of my time crafting user interfaces and making
          sure everything looks and feels just right. There&apos;s something
          satisfying about turning a design into a smooth, interactive
          experience that users actually enjoy.
        </Paragraph>

        <Paragraph className=" mt-4">
          Now I&apos;m on this exciting journey to become a MERN stack
          developer. I&apos;m diving deep into MongoDB, Express, React, and
          Node.js to build complete applications from front to back. It&apos;s
          like learning a new language, but for building entire ecosystems
          instead of just pretty faces.
        </Paragraph>

        <Paragraph className=" mt-4">
          What I love about this field is that there&apos;s always something new
          to learn. One day you&apos;re tweaking CSS animations, the next
          you&apos;re setting up API endpoints. Keeps things interesting, you
          know?
        </Paragraph>

        <Paragraph className=" mt-4">
          This portfolio is where I showcase the projects I&apos;ve been working
          on - from simple landing pages to more complex applications. It&apos;s
          a mix of my frontend work and the MERN projects I&apos;m building as I
          level up my skills.
        </Paragraph>

        <Paragraph className=" mt-4">
          If you&apos;re here looking to collaborate or just curious about my
          work, feel free to reach out! I&apos;m always up for discussing new
          projects or just chatting about the latest in web development.
        </Paragraph>
      </div>
    </div>
  );
}
