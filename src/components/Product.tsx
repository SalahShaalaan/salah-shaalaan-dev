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
        className="inline-flex items-center mb-12 text-gray-600 hover:text-gray-900 transition-colors"
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
            priority
          />
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {product.images.map((image, idx) => (
            <button
              onClick={() => setActiveImage(image)}
              key={`image-${idx}`}
              className={`relative aspect-video rounded-lg overflow-hidden shadow-md ${
                activeImage === image
                  ? "ring-2 ring-offset-2 ring-blue-500"
                  : "hover:opacity-80"
              } transition-all duration-200`}
            >
              <Image
                src={image}
                alt={`${product.title} preview ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              {product.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {product.stack?.map((stack: string) => (
                <span
                  key={stack}
                  className="px-4 py-1.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>

          <div className="text-lg text-gray-600 leading-relaxed">
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
              className="inline-flex items-center px-8 py-4 text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              View Live Project
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
