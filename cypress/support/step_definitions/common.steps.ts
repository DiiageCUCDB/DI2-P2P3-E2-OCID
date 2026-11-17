import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

// Reusable steps shared by every feature file.

Given('I visit {string}', (path: string) => {
  cy.visit(path)
})

When('I click on {string}', (text: string) => {
  cy.contains(text).click()
})

When('I type {string} in the {string} field', (value: string, field: string) => {
  cy.get(`[name="${field}"], [data-testid="${field}"]`).type(value)
})

Then('I should see the heading {string}', (text: string) => {
  cy.contains('h1', text).should('be.visible')
})

Then('I should see {string}', (text: string) => {
  cy.contains(text).should('be.visible')
})

Then('I should be on {string}', (path: string) => {
  cy.location('pathname').should('eq', path)
})
