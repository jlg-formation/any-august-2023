import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["cypress/e2e/**/*.cy.ts"],
    excludeSpecPattern: ["cypress/e2e/**/*a2.cy.ts"],
  },
  video: true,
});
