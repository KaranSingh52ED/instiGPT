module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4F46E5",
          DEFAULT: "#3B82F6",
          dark: "#1E40AF",
        },
        secondary: {
          light: "#FACC15",
          DEFAULT: "#EAB308",
          dark: "#CA8A04",
        },
        accent: {
          light: "#14B8A6",
          DEFAULT: "#0D9488",
          dark: "#0F766E",
        },
        background: {
          light: "#F3F4F6",
          DEFAULT: "#E5E7EB",
          dark: "#D1D5DB",
        },
        text: {
          light: "#6B7280",
          DEFAULT: "#374151",
          dark: "#1F2937",
        },
        iitm: {
          maroon: "#800000",
          gold: "#FFD700",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "Arial", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        typing: "typing 1.5s steps(30, end)",
        blink: "blink .5s step-end infinite alternate",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 1.5s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px #3B82F6" },
          "50%": { boxShadow: "0 0 20px #3B82F6" },
        },
      },
    },
  },
  plugins: [],
};
