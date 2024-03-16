/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#005d15",
        "text-primary": "#ffff",
        secondary: "#deffe5",
        "text-secondary": "#000000",
        tertiary: "#cfcfcf",
        "text-tertiary": "#000000",
        foreground: "#df6b00",
        "text-foreground": "#ffffff",
        foreground2: "#001c06",
        "text-foreground2": "#ffffff",
      },
    },
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
