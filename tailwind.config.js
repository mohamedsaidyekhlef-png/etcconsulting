/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#022c22", // Deep Emerald (Growth, Prestige, Stability)
        secondary: "#d97706", // Vibrant Amber/Gold (Energy, Luxury, Catchy)
        accent: "#10b981", // Emerald 500 (Freshness, Modernity)
        "soft-white": "#F0FDF4", // Very light mint/white tint
        "cool-grey": "#E2E8F0", 
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'about-pattern': "linear-gradient(to right, rgba(240, 253, 244, 0.95), rgba(240, 253, 244, 0.8)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80')",
      }
    },
  },
  plugins: [],
}
