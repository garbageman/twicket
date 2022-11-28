module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions",  {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
           modules: {
             mode: 'local',
           exportLocalsConvention: 'camelCaseOnly',
         }
        }
      }
    }],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  }
};
