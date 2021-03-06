const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: "#1D1D26",
                "grey-low-con": "#4D4D57",
                brand: {
                    light: "#95eef6",
                    DEFAULT: "#36E4FF",
                    alternate: "#35e3fa",
                    dark: "",
                },
                transparent: "transparent",
                current: "currentColor",
            },
            fontFamily: {
                sans: ["montserrat", "ui-sans-serif", "system-ui"],
            },
            height: {
                extrascreen: "120vh",
            },
            minHeight: {
                "1-2-screen": "50vh",
                "2-3-screen": "66vh",
                "1-3-screen": "33vh",
                "2-screen": "200vh",
                120: "30rem",
                140: "35rem",
            },
            fontSize: {
                large: "40rem",
                huge: "55rem",
            },
            borderRadius: {
                xl: "1rem",
            },
        },
        screens: {
            xs: "350px",
            ...defaultTheme.screens,
        },
    },
    variants: {
        extend: {
            translate: ["hover"],
        },
    },
    plugins: [],
};
