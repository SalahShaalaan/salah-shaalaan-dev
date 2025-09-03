"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center mb-12 text-secondary hover:text-primary transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={activeImage}
            alt={product.title}
            fill
            className="object-cover"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {product.images.map((image, idx) => (
            <button
              onClick={() => setActiveImage(image)}
              key={`image-${idx}`}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-gray-200 ${
                activeImage === image
                  ? "ring-2 ring-offset-2 ring-accent"
                  : "hover:opacity-80 hover:shadow-xl"
              } transition-all duration-200`}
            >
              <Image
                src={image}
                alt={`${product.title} preview ${idx + 1}`}
                fill
                className="object-contain bg-gray-50"
                quality={100}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold text-primary">{product.title}</h1>
            <div className="flex flex-wrap gap-2">
              {product.stack?.map((stack: string) => (
                <span
                  key={stack}
                  className="px-4 py-1.5 text-sm font-medium bg-gray-50 text-secondary rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>

          <div className="text-lg text-secondary leading-relaxed">
            {product.description}
          </div>

          <div className="prose prose-lg prose-gray max-w-none border-t border-gray-200 pt-8">
            {product?.content}
          </div>

          <div className="pt-8">
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-black border border-gray-200 "
            >
              View Live Demo
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
