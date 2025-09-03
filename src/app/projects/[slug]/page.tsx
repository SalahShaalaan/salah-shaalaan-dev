import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { figmaProjects } from "@/constants/figmaProjects";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = [...products, ...figmaProjects].find(
    (p) => p.slug === slug
  ) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Salah Shaalaan",
      description:
        "Explore my portfolio of full-stack web applications built with MERN Stack, Next.js, and TypeScript. Featured projects include real estate platforms, healthcare systems, and enterprise dashboards - demonstrating expertise in building secure, scalable, and user-friendly solutions.",
    };
  }
}

export default async function SingleProjectPage({ params }: Props) {
  const slug = params.slug;
  const product = [...products, ...figmaProjects].find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
