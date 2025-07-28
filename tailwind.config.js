import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lunasima: ['Lunasima', 'sans-serif'],
            },
            colors: {
                background: '#F9FAFB',       // sfondo chiaro
                primary: '#1F2937',          // testo principale scuro (gray-800)
                secondary: '#6B7280',        // testo secondario (gray-500)
                textLight: '#4B5563',        // testo terziario/grigio medio (gray-600)
                textMuted: '#9CA3AF',        // testo più chiaro/grigio soft (gray-400)
                gradientTextStart: '#4F46E5', // indigo-600 (per gradienti testo)
                gradientTextEnd: '#8B5CF6',   // purple-600
            },
            backgroundImage: {
                btngradient_primary_inverted: 'linear-gradient(to top left, #4f46e5, #8b5cf6)',  // indigo-600 to purple-600
                btngradient_primary: 'linear-gradient(to bottom right, #4f46e5, #8b5cf6)',        // indigo-600 to purple-600
                btngradient_secondary: 'linear-gradient(to top left, #6b21a8, #a78bfa)',          // purple-800 to purple-300
                text_gradient: 'linear-gradient(90deg, #4f46e5, #8b5cf6)',                        // per testo gradiente orizzontale
            },
        },
    },
    plugins: [daisyui],
};