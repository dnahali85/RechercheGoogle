import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('the browser is already launched', () => {
    cy.window().its('open').should('be.called')
})


    Given ('the research Google page is already opened', () => {
     cy.visit('https://www.google.com')
     cy.url().should('eq', 'https://www.google.com')

})
    When ('I search a keyword kwd1', () => {


})
    Then ('the list of results contains the keyword kwd1 is displayed', () => {
    

})
    