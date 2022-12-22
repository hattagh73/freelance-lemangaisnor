/** @type { import("tailwindcss").Config } */

tailwindConfig = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.css"
    ],
    theme: {
        extend: {
            colors: {
                "clr-light-primary": "#FAFAFA",
                "clr-light-secondary": "#f6f6f6",
                "clr-light-tertiary": "#28553B",
                "clr-green-primary": "#24C166",
                "clr-green-seondary": "#21B45E",
                "clr-green-tertiary": "#1EA657",
                "clr-dark-primary": "#0A371D",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            fontSize: {
                "10xl": ["10rem", { lineHeight: "1" }],
            },
            screens: {
                "2xl": "1537px",
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}

module.exports = tailwindConfig;