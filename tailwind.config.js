/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                negro: "#453D47",
                azulDark: "#1d3557",
                azulLight: "#778da9",
                rosa: "#FF006E",
            },
        },
    },
    plugins: [],
};
