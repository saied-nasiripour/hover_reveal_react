/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                knewave: ['Knewave', 'cursive'],
                raleway: ['Raleway', 'sans-serif'],
            },
            colors: {
                pink: {
                    500: '#f25978',
                },
            },
        },
    },
    plugins: [],
}

