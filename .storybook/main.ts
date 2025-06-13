import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "watch-node-modules",
      options: {
        ignored: [
          /node_modules\/(?!react-liquid-glass-ui).*/,
          "**/.git/**",
          "**/.storybook/**",
          "**/.vite/**",
          "**/.storybook/**",
          "**/.vite/**",
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: undefined, // Use default Vite config for Storybook
      },
    },
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  viteFinal: async (config) => {
    // Ensure proper CSS handling for development
    config.css = {
      ...config.css,
      postcss: "./postcss.config.js",
    };

    // Enable hot reloading for better development experience
    if (config.server) {
      config.server.hmr = {
        port: 6007, // Different port to avoid conflicts
      };
    }

    return config;
  },
};
export default config;
