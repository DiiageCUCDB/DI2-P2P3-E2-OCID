import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
  e2e: {
    // Gherkin features, plus the classic Cypress specs that already exist
    specPattern: ['cypress/e2e/**/*.feature', 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}'],
    baseUrl: 'http://localhost:4173',
    async setupNodeEvents(on, config) {
      // Reads .cypress-cucumber-preprocessorrc.json and registers the cucumber tasks/hooks
      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      )

      return config
    },
  },
  component: {
    specPattern: 'src/**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})
