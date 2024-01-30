import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
      },
      colors: {
        primary: "#f13a01",
      },
      gridTemplateColumns: {
        banner: "0.4fr 0.6fr",
        "banner-responsive": "0.6fr 0.4fr",
      },
    },
  },
  plugins: [],
};
export default config;
