/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0a0a0a",
          100: "#121212",
          200: "#1a1a1a",
          300: "#262626",
          400: "#383838",
        },
      },
      fontFamily: {
        sans: ["Inter", "Outfit", "system-ui", "sans-serif"],
        outfit: ["Outfit", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-15px) scale(1.02)" },
        },
        glow: {
          "0%, 100%": { opacity: 0.15, transform: "scale(1)" },
          "50%": { opacity: 0.25, transform: "scale(1.05)" },
        }
      },
      boxShadow: {
        "glow-purple": "0 0 30px rgba(168, 85, 247, 0.15)",
        "glow-blue": "0 0 30px rgba(59, 130, 246, 0.15)",
        "glow-combined": "0 0 40px rgba(99, 102, 241, 0.2)",
      }
    },
  },
  plugins: [],
}
