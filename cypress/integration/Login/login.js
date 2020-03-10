Given('I open Conduit login page', () => {
    cy.visit('https://portal.ssat.org/Account/LogOn/')
  });
  
  When('user type username and password', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#username').type(element.username)
        cy.get('#password').type(element.password)
    })
  })
  
  When('user click on sign in button', () => {
    cy.get('.btn').contains('Sign in').should('be.visible').click()
  });
  
  Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
  });