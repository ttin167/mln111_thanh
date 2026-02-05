import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#730466',
        bgBlue: '#ADD6FD',
        bgPink: '#FFD1F5',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue-pink": "linear-gradient(135deg, rgba(173, 214, 253, 0.7) 0%, rgba(255, 209, 245, 0.7) 100%)",
        "gradient-pink-blue": "linear-gradient(135deg, rgba(255, 209, 245, 0.7) 0%, rgba(173, 214, 253, 0.7) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
