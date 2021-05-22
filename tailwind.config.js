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
                    DEFAULT: "#36E4FF",
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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
