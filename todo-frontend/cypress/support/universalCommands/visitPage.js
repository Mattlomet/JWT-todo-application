Cypress.Commands.add("visitHomePage", ()=> {
    cy.visit("http://localhost:8081")
    cy.wait(2000)
})