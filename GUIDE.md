# React Liquid Glass UI

A modern React component library built with TypeScript, Tailwind CSS, Radix UI, and Storybook.

## 🚀 Features

- **Modern Stack**: Built with React 18, TypeScript, and Vite
- **Accessible**: Components built on Radix UI primitives
- **Styled**: Beautiful styling with Tailwind CSS
- **Developer Experience**: Full TypeScript support and Storybook documentation
- **Customizable**: Easy theming with CSS custom properties
- **Build Ready**: Optimized for library distribution

## 📦 Installation

```bash
npm install react-liquid-glass-ui
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Install dependencies:

```bash
npm install
```

2. Start Storybook for development:

```bash
npm run storybook
```

3. Build the library:

```bash
npm run build
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the library for production
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook for production
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🎨 Usage

### Basic Usage

```tsx
import { Button, Card, CardHeader, CardContent } from "react-liquid-glass-ui";
import "react-liquid-glass-ui/dist/style.css";

function App() {
  return (
    <Card>
      <CardHeader>
        <h1>Welcome</h1>
      </CardHeader>
      <CardContent>
        <Button>Click me!</Button>
      </CardContent>
    </Card>
  );
}
```

### With Theming

The library supports theming through CSS custom properties. You can customize the theme by overriding the CSS variables:

```css
:root {
  --primary: 220 14% 93%;
  --primary-foreground: 220 9% 46%;
  /* ... other variables */
}
```

## 🧩 Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
<Button variant="outline" size="lg">
  Click me
</Button>
```

**Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes**: `default`, `sm`, `lg`, `icon`

### Card

A container component for grouping related content.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## 📦 Publishing to NPM

This library is configured for easy publishing to the npm registry.

### Prerequisites for Publishing

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **Login to NPM**: Run `npm login` in your terminal
3. **Update Package Info**: Modify the following in `package.json`:
   - `name`: Choose a unique package name
   - `author`: Add your name and email
   - `repository`: Add your GitHub repository URL
   - `homepage`: Add your project homepage URL

### Publishing Steps

1. **Update Package Information**:

   ```bash
   # Update package.json with your details
   ```

2. **Test the Package Locally**:

   ```bash
   # Create a local package file
   npm run pack:local

   # Test publishing (dry run)
   npm run publish:dry-run
   ```

3. **Publish to NPM**:

   ```bash
   # For patch release (0.1.0 -> 0.1.1)
   npm run release:patch

   # For minor release (0.1.0 -> 0.2.0)
   npm run release:minor

   # For major release (0.1.0 -> 1.0.0)
   npm run release:major

   # Or publish manually
   npm version patch  # or minor/major
   npm publish
   ```

### Package Configuration

The package is configured with:

- **ES Modules** and **UMD** support
- **TypeScript declarations** included
- **Tree-shaking** friendly
- **CSS styles** exported separately
- **Proper peer dependencies** for React

### What Gets Published

The published package includes:

- `dist/` - Built library files
- `README.md` - Documentation
- `package.json` - Package metadata

Development files are excluded via `.npmignore`.

## 🎯 Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible Primitives
- **Storybook** - Component Documentation
- **Class Variance Authority** - Variant Management
- **ESLint** - Code Linting

## 📖 Documentation

Visit [Storybook](http://localhost:6006) when running locally to see all components with interactive examples.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
