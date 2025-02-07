import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "", // Set max width to 1440px
      },

      fontFamily: {
        display: ["Clash Display", "sans-serif"],
      },

      colors: {
        primary: "#2A254B",
        darkprimary: "#2A254B",
        lightgrey: "#F9F9F9",
        bordergrey: "#EBE8F4",
        white: "#FFFFFF",
        borderdark: "#CAC6DA",
        navtext: "#726E8D",
        buttoncolor: "#4E4D93",
        textlight: "#505977",
      },
    },
  },
  plugins: [],
};
export default config;
