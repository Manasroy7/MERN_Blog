const flowbite = require("flowbite-react/tailwind");  //added

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),  //added
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),  //added
  ],
}