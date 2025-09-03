/** @type {import('tailwindcss').Config} */
const config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#374151", // Dark gray for text
        secondary: "#6B7280", // Medium gray for secondary text
        accent: "#3B82F6", // Blue accent for highlights
        border: "#E5E7EB", // Light gray for borders (gray-200)
        background: "#FFFFFF", // Pure white background
      },
    },
  },
  plugins: [],
} 

export default config;
