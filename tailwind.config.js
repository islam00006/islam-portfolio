module.exports = {
  darkMode: ["class"],
  content: ["./index.html","./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT:'hsl(var(--primary))', foreground:'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT:'hsl(var(--secondary))', foreground:'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT:'hsl(var(--muted))', foreground:'hsl(var(--muted-foreground))' },
        accent: { DEFAULT:'hsl(var(--accent))', foreground:'hsl(var(--accent-foreground))' },
        card: { DEFAULT:'hsl(var(--card))', foreground:'hsl(var(--card-foreground))' },
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%)',
        'grad-subtle': 'linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(56,189,248,0.1) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
