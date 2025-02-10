import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const TechStack = () => {
  const stack = [
    {
      title: "MongoDB",
      src: "/images/logos/mongodb.png",
      className: "h-10 w-10 text-green-500",
      isImage: false,
    },
    {
      title: "Express",
      src: "/images/logos/express.png",
      className: "h-10 w-10 text-gray-700",
      isImage: false,
    },
    {
      title: "React",
      src: "/images/logos/react.png",
      className: "h-10 w-10 text-blue-400",
      isImage: false,
    },
    {
      title: "Node",
      src: "/images/logos/node.png",
      className: "h-10 w-12",
      isImage: true,
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
      isImage: true,
    },
    {
      title: "JavaScript",
      src: "/images/logos/js.png",
      className: "h-10 w-14",
      isImage: true,
    },
    {
      title: "TypeScript",
      src: "/images/logos/ts.png",
      className: "h-10 w-14",
      isImage: true,
    },
    {
      title: "API",
      src: "/images/logos/api.png",
      className: "h-10 w-14",
      isImage: true,
    },
    {
      title: "Redux",
      src: "/images/logos/redux.png",
      className: "h-10 w-10 text-purple-600",
      isImage: false,
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
      isImage: true,
    },
    {
      title: "Jest",
      src: "/images/logos/jest.png",
      className: "h-10 w-10 text-red-600",
      isImage: false,
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
      isImage: true,
    },
    {
      title: "Bootstrap",
      src: "/images/logos/bootstrap.png",
      className: "h-10 w-10 text-purple-700",
      isImage: false,
    },
    {
      title: "Postman",
      src: "/images/logos/postman.png",
      className: "h-10 w-10 text-orange-500",
      isImage: false,
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
      isImage: true,
    },
    {
      title: "Photoshop",
      src: "/images/logos/photoshop.png",
      className: "h-10 w-10 text-blue-600",
      isImage: false,
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap gap-6">
        {stack.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            {item.isImage ? (
              <Image
                src={item.src}
                alt={item.title}
                className={twMerge("object-contain", item.className)}
                width={60}
                height={60}
              />
            ) : (
              <div
                className={twMerge(
                  "flex items-center justify-center",
                  item.className
                )}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <span className="text-sm mt-1 text-[#B89650]">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
