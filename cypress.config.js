const { defineConfig } = require('cypress')
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    urlEbac: 'http://lojaebac.ebaconline.art.br/',
    reporter: 'cypress-multi-reporters',
    defaultCommandTimeout: 50000,
    viewportWidth: 1024,
    viewportHeight: 768,
    reporterOptions: {
      reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
      cypressMochawesomeReporterReporterOptions: {
        reportDir: 'cypress/reports',
        charts: true,
        reportPageTitle: 'Simulador Test Report',
        embeddedScreenshots: true,
        inlineAssets: true,
      },
      mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/reports/results-[hash].xml',
      },
    },
    video: false,
    screenshotsFolder: 'cypress/reports/mochareports',

    setupNodeEvents(on, config) {
       on('task', {
        failed(message) {
          console.error('❌ Erro no teste:', message)
          return null
        },
      })

      // 📼 Remove vídeos se todos os testes passaram
      on('after:spec', (spec, results) => {
        if (results && results.video && !results.tests.some(test =>
          test.attempts.some(attempt => attempt.state === 'failed')
        )) {
          fs.unlinkSync(results.video);
        }
      });

      // 📊 Reporter mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        await afterRunHook();
      });

      return config;
    }
  },
});