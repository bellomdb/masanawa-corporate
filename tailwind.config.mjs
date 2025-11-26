/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: '#FBBF24', // Amber 400 - brighter gold
                    dark: '#111827',
                    green: '#10B981', // Emerald 500 - vibrant green
                    purple: '#8B5CF6', // Violet 500 - vibrant purple
                    teal: '#14B8A6', // Teal 500
                    indigo: '#6366F1', // Indigo 500
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'], // New display font
            }
        },
    },
    plugins: [],
}
