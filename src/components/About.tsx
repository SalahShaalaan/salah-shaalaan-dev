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
          Hey there, I&apos;m a Full Stack Developer with a genuine passion for
          building software solutions. Welcome to my portfolio where I share my
          journey through the world of web development!
        </Paragraph>

        <Paragraph className=" mt-4">
          From the moment I wrote my first line of code, I knew I had found my
          calling. As a full stack developer, I thrive on building complete
          solutions from the ground up. My passion lies in crafting robust
          applications that seamlessly connect frontend elegance with backend
          power.
        </Paragraph>

        <Paragraph className=" mt-4">
          My obsession with programming extends beyond just writing code.
          I&apos;m constantly exploring new technologies, frameworks, and
          methodologies. Whether it&apos;s optimizing database queries or
          crafting responsive user interfaces, I find joy in every aspect of
          software development.
        </Paragraph>

        <Paragraph className=" mt-4">
          What drives me is the endless pursuit of technical excellence. I
          believe that great software is built on clean code, scalable
          architecture, and attention to detail. Every project I tackle is an
          opportunity to push boundaries and implement innovative solutions.
        </Paragraph>

        <Paragraph className=" mt-4">
          Through this portfolio, I&apos;m excited to showcase the projects and
          solutions I&apos;ve crafted throughout my journey. Whether you&apos;re
          a fellow developer looking to collaborate, a business seeking
          technical expertise, or someone interested in the world of software
          development, you&apos;ll find insights into my work and approach here.
        </Paragraph>

        <Paragraph className=" mt-4">
          Join me in exploring the fascinating world of full stack development,
          where frontend meets backend, where databases talk to APIs, and where
          complex problems transform into elegant solutions. Let&apos;s dive
          deep into the art and science of building modern web applications.
        </Paragraph>

        <Paragraph className=" mt-4">
          Thank you for visiting my portfolio, and I look forward to potentially
          collaborating on exciting projects that push the boundaries of
          what&apos;s possible in software development.
        </Paragraph>
      </div>
    </div>
  );
}
