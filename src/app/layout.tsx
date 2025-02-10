import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const mainFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salah Shaalaan - Developer",
  description:
    "Full Stack Developer specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js) with expertise in building scalable web applications. Experienced in Next.js, TypeScript, and modern web development practices. Creating responsive, high-performance solutions for real-world business challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          mainFont.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-[#faf7f5] flex-1 overflow-y-auto">
          <div className="flex-1 bg-mainBlack min-h-screen lg:rounded-tl-xl border border-transparent lg:border-[#B89650] overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
