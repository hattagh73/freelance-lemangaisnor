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
                "clr-light-secondary": "#F6F6F6",
                "clr-light-tertiary": "#787878",
                // "clr-light-tertiary": "#787C76",
                "clr-green-primary": "#8A9A5B",
                "clr-green-seondary": "#21B45E",
                "clr-green-tertiary": "#1EA657",
                // "clr-dark-primary": "#0e120c",
                "clr-dark-primary": "#323232",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                mochiy: ["Mochiy", "sans-serif"],
                heyaug: ["HeyAug", "sans-serif"],
            },
            fontSize: {
                "10xl": ["10rem", { lineHeight: "1" }],
            },
            screens: {
                "2xl": "1537px",
            },
            // backgroundImage: {
            //     hero: "url('/images/pattern-africa.svg')",
            //     leaf: "url('/images/bg-leaf.svg')",
            // }
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio')
    ],
}

module.exports = tailwindConfig;