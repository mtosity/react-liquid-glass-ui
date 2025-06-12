# Publishing Guide

This guide will help you publish the `react-liquid-glass-ui` library to the npm registry.

## Pre-Publishing Checklist

### 1. Update Package Information

- [ ] Update `name` in `package.json` to a unique npm package name
- [ ] Update `author` field with your name and email
- [ ] Update `repository.url` with your GitHub repository URL
- [ ] Update `homepage` with your project homepage URL
- [ ] Update `bugs.url` with your issues page URL

### 2. Verify Package Contents

- [ ] Run `npm run build` to ensure clean build
- [ ] Run `npm run publish:dry-run` to preview what will be published
- [ ] Run `npm run pack:local` to create local tarball for inspection
- [ ] Verify `dist/` folder contains all necessary files

### 3. Quality Checks

- [ ] Run `npm run lint` to ensure code quality
- [ ] Run `npm run test` (when tests are added)
- [ ] Test components in Storybook (`npm run storybook`)
- [ ] Verify TypeScript declarations are generated correctly

### 4. NPM Setup

- [ ] Create npm account at [npmjs.com](https://www.npmjs.com)
- [ ] Run `npm login` to authenticate
- [ ] Verify you're logged in with `npm whoami`

## Publishing Steps

### Option 1: Automated Release Scripts

```bash
# For patch release (0.1.0 → 0.1.1)
npm run release:patch

# For minor release (0.1.0 → 0.2.0)
npm run release:minor

# For major release (0.1.0 → 1.0.0)
npm run release:major
```

### Option 2: Manual Publishing

```bash
# 1. Update version
npm version patch  # or minor/major

# 2. Build the library
npm run build

# 3. Publish to npm
npm publish
```

## Post-Publishing Steps

### 1. Verify Publication

- [ ] Check your package on [npmjs.com](https://www.npmjs.com/package/react-liquid-glass-ui)
- [ ] Test installation: `npm install react-liquid-glass-ui`
- [ ] Verify imports work correctly

### 2. Update Documentation

- [ ] Update README with correct installation instructions
- [ ] Add release notes to GitHub releases
- [ ] Update Storybook deployment (if applicable)

### 3. Promote Your Library

- [ ] Share on social media
- [ ] Add to component library directories
- [ ] Create demo applications

## Package Structure

The published package includes:

```
react-liquid-glass-ui/
├── dist/
│   ├── index.es.js          # ES Module build
│   ├── index.umd.js         # UMD build
│   ├── index.d.ts           # TypeScript declarations
│   ├── components/ui/       # Component type definitions
│   └── lib/                 # Utility type definitions
├── package.json             # Package metadata
└── README.md               # Documentation
```

## Troubleshooting

### Common Issues

1. **Package name already exists**

   - Choose a unique name (try adding your username prefix)
   - Check availability on npmjs.com

2. **Authentication issues**

   - Run `npm login` again
   - Check you have publish permissions

3. **Build fails**

   - Clear `dist/` folder and rebuild
   - Check for TypeScript errors

4. **Missing files in package**
   - Verify `files` field in package.json
   - Check `.npmignore` doesn't exclude needed files

### Version Management

- **Patch** (0.1.0 → 0.1.1): Bug fixes
- **Minor** (0.1.0 → 0.2.0): New features, backward compatible
- **Major** (0.1.0 → 1.0.0): Breaking changes

## Security

- Never publish sensitive information
- Review package contents before publishing
- Use `npm audit` to check for vulnerabilities
- Consider using `.npmignore` for additional file exclusions

## Continuous Integration

Consider setting up GitHub Actions for automated publishing:

```yaml
name: Publish to NPM
on:
  release:
    types: [published]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
          registry-url: "https://registry.npmjs.org"
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
