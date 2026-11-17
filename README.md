# OCID

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### End-to-end tests with Gherkin (Cypress)

Scenarios are written in Gherkin (`.feature` files) and run by Cypress through
[`@badeball/cypress-cucumber-preprocessor`](https://github.com/badeball/cypress-cucumber-preprocessor).

```
cypress/
├── e2e/*.feature                    # scenarios (Given / When / Then)
└── support/step_definitions/*.ts    # step implementations, shared by all features
```

```sh
npm run test:e2e        # build preview + run every feature headless
npm run test:e2e:dev    # interactive Cypress runner
```

Run only some scenarios with tags (e.g. `@smoke` above a `Feature:` or `Scenario:`):

```sh
npx cypress run --e2e --env tags=@smoke
```

Reports are written to `cypress/reports/` (HTML and JSON). Reusable steps live in
`cypress/support/step_definitions/common.steps.ts`; add a new `*.steps.ts` file there for steps
specific to a feature.
