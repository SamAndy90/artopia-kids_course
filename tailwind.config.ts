import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        _violet: {
          300: "#623b94",
          400: "#7A45BD",
          500: "#A259FF",
          600: "#4B05A5",
          700: "#40038D",
          800: "#32026F",
          900: "#200049",
        },
        standart_grey: {
          500: "#3B3B3B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
