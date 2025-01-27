/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ './src/**/*.{js,jsx,ts,tsx}' ],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                quantico: [ 'Quantico' ],
                iceland: [ 'Iceland' ]
            }
        }
    },
    plugins: [],
}