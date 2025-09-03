"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { figmaProjects } from "@/constants/figmaProjects";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { IconBrandFigma } from "@tabler/icons-react";

export const FigmaProjects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {figmaProjects.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="group block hover:bg-gray-50 rounded-xl transition duration-200 border border-gray-200 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  height="300"
                  width={600}
                  className="w-full h-48 object-cover"
                  quality={100}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200" />

                {/* Design Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center space-x-1.5 text-xs font-medium text-secondary border border-gray-200 shadow-sm">
                  <IconBrandFigma className="h-3.5 w-3.5 text-accent" />
                  <span>Design</span>
                </div>
              </div>

              <div className="p-3 space-y-2">
                <Heading as="h4" className="font-bold text-sm line-clamp-2">
                  {product.title}
                </Heading>

                <Paragraph className="text-xs text-secondary line-clamp-2 leading-snug">
                  {product.description}
                </Paragraph>

                <div className="flex flex-wrap gap-1">
                  {product.stack?.slice(0, 3).map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs font-medium bg-gray-50 px-1.5 py-0.5 rounded-full text-secondary border border-gray-200"
                    >
                      {stack}
                    </span>
                  ))}
                  {product.stack && product.stack.length > 3 && (
                    <span className="text-xs font-medium bg-gray-100 px-1.5 py-0.5 rounded-full text-secondary">
                      +{product.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
