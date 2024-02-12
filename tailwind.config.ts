import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        standart_violet: {
          300: "#623b94",
          400: "#7A45BD",
          500: "#A259FF",
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
