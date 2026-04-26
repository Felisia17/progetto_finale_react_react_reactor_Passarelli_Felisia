// import daisyui from "daisyui";

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   plugins: [daisyui],
// };

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        electro: ['var(--font-electro)', 'sans-serif'],
        nova: ['"Nova Square"', 'sans-serif'],
        rajdhani: ['"Rajdhani"', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
};