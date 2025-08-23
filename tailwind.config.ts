import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  // @ts-expect-error
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {},
  },

  plugins: [],
} satisfies Partial<Config>;

export default config;