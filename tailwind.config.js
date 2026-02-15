/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        amber: {
          100: '#FFB54E'
        },
        error: "#F14141",
        success: "#2F9B65",
      },
      fontFamily: {
        inter: ["Inter-Regular", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-semi-bold": ["Inter-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}