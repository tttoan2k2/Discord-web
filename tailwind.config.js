const { animation } = require("react-reveal/globals");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            keyframes: {
                transRight: {
                    "0%": { transform: "translate(100%)", opacity: "0" },
                    "100%": { transform: "translate(0%)", opacity: "100" },
                },
            },
        },
    },
    plugins: [],
};
