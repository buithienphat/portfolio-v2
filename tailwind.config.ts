import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#66c2d0",
          hover: "#66c2d0",
        },
      },
      transitionDuration: {
        main: "500ms",
      },
      boxShadow: {
        main: "0 0 10px 0 var(--shadow-color-accent)",
        second: "0 0 10px 5px var(--shadow-color-accent-hover)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      textShadow: {
        main: "0 0px 15px var(--color-accent)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-textshadow")],
} satisfies Config;

export default config;
