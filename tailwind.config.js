/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green/100": "#D1FAE5",
        "green/200": "#00AF52",
        "green/300": "#81B03F66",
        "green/800": "#065F46",
        "orange": "#EA580C",
        "orange/400": "#FB923C",
        "gray": "#00000099",
        "gray/600": "#4B5563",
        "gray/700": "#344054",
        "gray/800": "#1F2937",
        "gray/900": "#101828",
        "gray/500": "#667085",
        "red/50": "#FEF2F2",
        "red/400": "#F87171",
        "yellow/50": "#FFFBEB",
        "yellow/active": "#FFAE5D",
        "yellow/inactive": "#FFE7D6"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

