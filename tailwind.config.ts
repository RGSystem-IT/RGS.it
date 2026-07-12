import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f36017",
          black: "#0B0B0D",
          anthracite: "#18181B",
          cream: "#F8F5F0",
          border: "#EAE7E1",
          green: "#22C55E"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(11, 11, 13, 0.08)",
        orange: "0 18px 40px rgba(243, 96, 23, 0.18)"
      },
      borderRadius: {
        card: "1.75rem"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
