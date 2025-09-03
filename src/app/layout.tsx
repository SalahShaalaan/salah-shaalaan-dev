import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const mainFont = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salah Shaalaan - Developer",
  description: "Frontend Developer | React, Next.js",
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
          "flex antialiased h-screen overflow-hidden bg-gray-50"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-white flex-1 overflow-y-auto">
          <div className="flex-1 bg-background min-h-screen lg:rounded-tl-xl border border-transparent lg:border-gray-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
