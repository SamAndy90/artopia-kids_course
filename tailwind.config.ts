import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        _violet: {
          50: "#F8F2FF",
          300: "#623b94",
          400: "#7A45BD",
          500: "#A259FF",
          600: "#8B3AF2",
          700: "#741EE1",
          800: "#5A0DBD",
          900: "#41048F",
          950: "#22004E",
        },
        black: {
          500: "#121212",
        },
      },
    },
  },
  plugins: [],
};
export default config;
