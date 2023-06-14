{const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      [
        {
          reporter: "mochawesome",
          reporterOptions: {
            reportDir: "cypress/report/mochawesome-report",
            overwrite: true,
            html: true,
            json: false,
            timestamp: "mmddyyyy_HHMMss",
          },
          "projectId": "wj3gt3",
          "baseUrl": "https://www.agorabrasil.org.br"
        },
      ];
      
    },
  },
});}
