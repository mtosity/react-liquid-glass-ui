/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        system: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backdropBlur: {
        xs: "2px",
        "[25px]": "25px",
        "3xl": "64px",
        "4xl": "72px",
        "5xl": "96px",
      },
      backdropSaturate: {
        25: ".25",
        75: ".75",
        125: "1.25",
        150: "1.5",
        175: "1.75",
        "[180%]": "1.8",
        200: "2",
      },
      height: {
        13: "3.25rem",
        15: "3.75rem",
      },
      scale: {
        97: "0.97",
        102: "1.02",
        98: "0.98",
        105: "1.05",
        95: "0.95",
        110: "1.10",
        90: "0.90",
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
        ripple: {
          "0%": {
            width: "0",
            height: "0",
            opacity: "0.8",
          },
          "50%": {
            opacity: "0.4",
          },
          "100%": {
            width: "200px",
            height: "200px",
            marginLeft: "-100px",
            marginTop: "-100px",
            opacity: "0",
          },
        },
        liquidPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "brightness(1)",
          },
          "50%": {
            transform: "scale(1.02)",
            filter: "brightness(1.1)",
          },
        },
        glassShimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        floatUp: {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-20px) scale(1.1)",
            opacity: "0",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ripple: "ripple 0.6s ease-out forwards",
        liquidPulse: "liquidPulse 2s ease-in-out infinite",
        glassShimmer: "glassShimmer 2s ease-in-out infinite",
        floatUp: "floatUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)",
      },
      blur: {
        xs: "2px",
        "4xl": "72px",
        "5xl": "96px",
      },
    },
  },
  plugins: [],
};
