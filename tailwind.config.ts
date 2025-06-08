import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"], // Keep dark mode toggle if desired
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        // Vibe Colors - Light Theme
        vibe: {
          blue: {
            light: "hsl(var(--vibe-blue-light))", // Lighter shade of logo's main blue
            DEFAULT: "hsl(var(--vibe-blue-primary))", // Logo's main light blue
            dark: "hsl(var(--vibe-blue-dark))", // Logo's dark blue outline/features
          },
          pink: {
            DEFAULT: "hsl(var(--vibe-pink-blush))", // Logo's pink blush
          },
          text: {
            dark: "hsl(var(--vibe-text-dark))",
            medium: "hsl(var(--vibe-text-medium))",
            light: "hsl(var(--vibe-text-light))",
          },
          bg: {
            soft: "hsl(var(--vibe-bg-soft))", // Very soft blueish background
            DEFAULT: "hsl(var(--background))",
          },
        },
        // Ghibli colors are replaced by Vibe colors, but keeping structure if needed for dark mode
        ghibli: {
          dark: "#1a1b26",
          darker: "#101014",
          blue: "#7aa2f7",
          purple: "#bb9af7",
          cyan: "#7dcfff",
          green: "#9ece6a",
          orange: "#ff9e64",
          red: "#f7768e",
          gray: "#414868",
          text: "#c0caf5",
          muted: "#a9b1d6",
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
} satisfies Config

export default config
