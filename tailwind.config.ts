import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    // ...
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#F9F8FA",
      black: "#0A090C",
      primary: "#3A1A60",
      secondary: "#C2ABB2",
      accent: "#B19993",
      red: colors.red,
      gray: colors.gray,
    },
    fontFamily: {
      sans: [defaultTheme.fontFamily.sans],
      display: ["CabinetGrotesk Variable", ...defaultTheme.fontFamily.sans],
    },
    extend: {
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
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    // ...
  ],
} satisfies Config;

export default config;
