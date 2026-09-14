/** Static Tailwind build. Run: npm run build:css (after adding new Tailwind classes to any page). */
module.exports = {
  content: ['./*.html', './**/*.html', './*.js', './assets/*.js', '!./node_modules/**'],
  safelist: ['open', 'show', 'is-on', 'hidden', 'active'],
    "theme": {
    "extend": {
      "colors": {
        "leaf": "#8FBF3F",
        "grass": "#5E8C2A",
        "field": "#4A7A24",
        "forest": "#2E5016",
        "pine": "#1A3010",
        "charcoal": "#0C0C0A",
        "cream": "#F4F4F0",
        "itgreen": "#1A7A3D",
        "itred": "#CD212A"
      },
      "fontFamily": {
        "display": [
          "Cinzel",
          "serif"
        ],
        "sans": [
          "Montserrat",
          "system-ui",
          "sans-serif"
        ]
      },
      "boxShadow": {
        "card": "0 1px 2px rgba(26,48,16,.06), 0 12px 32px -12px rgba(26,48,16,.28)",
        "lift": "0 2px 4px rgba(26,48,16,.08), 0 28px 56px -20px rgba(26,48,16,.45)",
        "btn": "0 8px 24px -8px rgba(94,140,42,.6)"
      }
    }
  }
};
