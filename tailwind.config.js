/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#0f0f13",   // Fond principal sombre
          cyan: "#00ffff",   // Accent cyan
          red: "#ff4c4c",    // Accent rouge
          green: "#00ff7f",  // Accent vert
          gray: "#e5e7eb"    // Texte gris neutre
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        tech: ["Orbitron", "sans-serif"]
      },
      boxShadow: {
        "cyber-cyan": "0 0 15px rgba(0,255,255,0.5)",
        "cyber-green": "0 0 15px rgba(0,255,127,0.5)",
        "cyber-red": "0 0 15px rgba(255,76,76,0.5)"
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke'
      }
    },
  },
  plugins: [],
}
