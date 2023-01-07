/** @type { import("tailwindcss").Config } */

tailwindConfig = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.css",
    ],
    theme: {
        extend: {
            colors: {
                "clr-light-primary": "#FAFAFA",
                "clr-light-secondary": "#F4F4F4",
                "clr-light-tertiary": "#848683",
                "clr-green-primary": "#08C05A",
                "clr-green-seondary": "#21B45E",
                "clr-green-tertiary": "#1EA657",
                "clr-dark-primary": "#0e120c",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                cabinet: ["Cabinet", "sans-serif"],
            },
            fontSize: {
                "10xl": ["10rem", { lineHeight: "1" }],
            },
            screens: {
                "2xl": "1537px",
            },
            // backgroundImage: {
            //     hero: "url('/images/pattern-africa.svg')",
            // },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}

module.exports = tailwindConfig;