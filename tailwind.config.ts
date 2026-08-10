import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        arrasou: {
          black: "#0A0A0A",
          gold: "#C9A227",
          goldLight: "#E0C56E",
          white: "#FFFFFF",
          offWhite: "#F8F7F4",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },

      boxShadow: {
        premium: "0 20px 60px rgba(0, 0, 0, 0.12)",
        gold: "0 10px 40px rgba(201, 162, 39, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;