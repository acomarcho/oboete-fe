import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/image/hero-background.webp')",
      },
      spacing: {
        'wrapper': '1160px'
      }
    },
  },
  plugins: [],
};
export default config;
