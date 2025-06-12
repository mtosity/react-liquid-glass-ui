# Coming soon...

🚧🚧🚧

# React Liquid Glass UI

A modern React component library built with TypeScript, Tailwind CSS, Radix UI, and Storybook. Features Apple-inspired glassmorphic components with heavy backdrop blur and semi-transparent backgrounds.

## Installation

```bash
npm install react-liquid-glass-ui
```

## Setup

**Important:** This package uses Tailwind CSS and requires the CSS to be imported for styles to work.

### Method 1: Import the Compiled CSS (Recommended)

Import the compiled CSS file in your main application file:

```tsx
// In your main.tsx, App.tsx, or _app.tsx
import "react-liquid-glass-ui/styles";
```

### Method 2: Configure Tailwind (Alternative)

If you prefer to use your own Tailwind configuration, add the package to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your existing content paths
    "./node_modules/react-liquid-glass-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You may need to extend your theme with the package's custom properties
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
      // ... add other theme extensions from the package
    },
  },
  plugins: [],
};
```
