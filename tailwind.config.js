/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                LeagueSpartan: ["League Spartan", "sans-serif"],
            },
            colors: {
                primary: {
                    DarkCyan: "hsl(180, 29%, 50%)",
                },
                neutral: {
                    background: "hsl(180, 52%, 96%)",
                    pillBG: "hsl(180, 31%, 95%)",
                    darkGrayCyan: "hsl(180, 8%, 52%)",
                    darkerGrayCyan: "hsl(180, 14%, 20%)",
                },
            },
        },
    },
    plugins: [],
};
