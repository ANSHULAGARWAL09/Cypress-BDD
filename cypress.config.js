const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require("@cypress/webpack-preprocessor");

async function setupNodeEvents(on, config) {
  // Add Cucumber preprocessor plugin
  await addCucumberPreprocessorPlugin(on, config);

  // Configure webpack for feature files
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );
  return config;
}

module.exports = defineConfig({
  // Project Information
  projectId: "r1egby", // Uncomment and set project ID if required

  // Asset Management
  trashAssetsBeforeRuns: true, // Clean up assets before runs
  downloadsFolder: "cypress/downloads",
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true, // Capture screenshots on failure

  // Video Recording
  video: true,
  videosFolder: "cypress/videos",
  videoCompression: false, // Disable video compression for better quality

  // Viewport Defaults
  viewportHeight: 800,
  viewportWidth: 1200,

  // Timeout Settings
  defaultCommandTimeout: 5000, // Default timeout for commands

  // Retry Logic
  retries: {
    runMode: 0, // Retry attempts in `cypress run`
    openMode: 0, // Retry attempts in `cypress open`
  },

  // Reporter Configuration
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    configFile: "reporter-config.json",
  },

  // E2E Testing Configuration
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/", // Base URL for the application
    specPattern: "**/*.feature", // Path to feature files
    setupNodeEvents,
  },
});
