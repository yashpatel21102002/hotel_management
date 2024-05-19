module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //theme:1
        // primary: "#EF4444",
        // darkprimary: "#E53935",
        // secondary: "#fecdd3",
        //theme:2
        primary: "#000",
        darkprimary: "#18181b",
        secondary: "#3f3f46",
      },
      spacing: {
        container: `max(
			  0.75rem,
			  calc((100vw - calc(1280px - 1rem * 2)) / 2)
			)`,
        "sm-container": `max(
			  1rem,
			  calc((100vw - calc(550px - 1rem * 2)) / 2)
			)`,
      },
    },
  },
  plugins: [],
};
