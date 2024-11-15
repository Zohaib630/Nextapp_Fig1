// tailwind.config.js
const { type } = require("tailwindcss");

module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#003366",
        brightYellow: "#FFC107",
        softPink: "#FF4081",
      },
      width: {
        '98': '30rem',
        '128': '35rem',  // Defines w-128 as 32rem (512px)
      },
    },
  },
  plugins: [],
};
