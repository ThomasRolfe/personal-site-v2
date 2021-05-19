module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: "#1D1D26",
                // secondary: {
                //     lighter: "#6e67f5",
                //     light: "#5951ed",
                //     DEFAULT: "#4f46e5",
                //     dark: "#443ccf",
                // },
                brand: {
                    light: "",
                    DEFAULT: "#2CDFCD",
                    dark: "",
                },
                contrast: {
                    DEFAULT: "#0C0A3E",
                },
                offblack: {
                    DEFAULT: "#24265a",
                },
                transparent: "transparent",
                current: "currentColor",
            },
            fontFamily: {
                // sans: ["montserrat", "ui-sans-serif", "system-ui"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
