/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Nature theme colors
        earth: {
          50: "hsl(33, 8%, 97%)", // Warm cream
          100: "hsl(33, 8%, 92%)", // Light sand
          200: "hsl(30, 15%, 85%)", // Warm stone
          300: "hsl(30, 20%, 75%)", // Medium sand
          400: "hsl(27, 25%, 55%)", // Clay brown
          500: "hsl(27, 22%, 45%)", // Medium brown
          600: "hsl(27, 22%, 35%)", // Dark brown
          700: "hsl(27, 22%, 25%)", // Very dark brown
          800: "hsl(27, 15%, 15%)", // Deep brown
          900: "hsl(27, 10%, 10%)", // Almost black
        },
        forest: {
          50: "hsl(85, 25%, 95%)", // Very light sage
          100: "hsl(85, 25%, 85%)", // Light sage
          200: "hsl(85, 25%, 75%)", // Sage green
          300: "hsl(85, 30%, 65%)", // Medium sage
          400: "hsl(120, 40%, 55%)", // Soft green
          500: "hsl(142, 69%, 45%)", // Forest green
          600: "hsl(142, 69%, 35%)", // Deep forest
          700: "hsl(142, 69%, 25%)", // Dark forest
          800: "hsl(142, 60%, 15%)", // Very dark forest
          900: "hsl(142, 50%, 10%)", // Deep forest night
        },
        moss: {
          50: "hsl(95, 15%, 95%)", // Very light moss
          100: "hsl(95, 15%, 85%)", // Light moss
          200: "hsl(95, 20%, 75%)", // Medium moss
          300: "hsl(95, 25%, 65%)", // Moss green
          400: "hsl(95, 30%, 55%)", // Rich moss
          500: "hsl(95, 35%, 45%)", // Deep moss
          600: "hsl(95, 40%, 35%)", // Dark moss
          700: "hsl(95, 45%, 25%)", // Very dark moss
          800: "hsl(95, 50%, 15%)", // Deep moss
          900: "hsl(95, 55%, 10%)", // Almost black moss
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

module.exports = config