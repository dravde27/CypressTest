const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fmx7xt',
viewportHeight: 1920,
viewportWidth: 1080,
failOnStatusCode: false,
pageLoadTimeout: 1200000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
