import tailwindScrollbar from "tailwind-scrollbar";
import type { PluginAPI, Config } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        port: "#207c49",
        portgray: "#47444a",
        lightport: "#7fb32b",
        liteport: "#acdb53",
        thickport: "#153e2e",
        darkport: "#1f3428",
        portblack: "#1b1d1e",
      },

      fontFamily: {
        Averia: ["Averia Serif Libre", "serif"],
        Lato: ["Lato", "sans-serif"],
        Esetban: ["Esteban", "serif"],
        Fredoka: ["Fredoka", "sans-serif"],
        Mont: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto Slab", "serif"],
        Open_Sans: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        "border-grow": {
          "0%": { border: "solid 1px transparent" },
          "20%": { border: "solid .8px #acdb53a7" },
          "40%": { border: "solid .6px #153e2ea5" },
          "60%": { border: "solid .4px #acdb53a7" },
          "80%": { border: "solid .6px #acdb53a7" },
          "100%": { border: ".8px solid #acdb53a7" },
        },
      },
      animation: { "border-grow": "border-grow 3s ease-in-out infinite" },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(90deg, #207c49, #acdb53)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          color: "transparent",
        },
      });
    },
    tailwindScrollbar,
  ],
};
export default config;
