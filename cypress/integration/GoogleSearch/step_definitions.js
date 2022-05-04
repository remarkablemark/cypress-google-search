// Converted google-search.js to this file
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I go to {string}', url => {
  cy.visit(url);
});

When('I search for {string}', text => {
  cy.get('input[name="q"]').type(`${text}{enter}`);
});

Then('I see {string}', text => {
  cy.xpath(`//body//*[text()="${text}"]`).should('have.length', 1)
});

