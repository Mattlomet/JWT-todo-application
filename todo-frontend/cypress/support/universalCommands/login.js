Cypress.Commands.add("login", (username,password)=> {
    cy.get(".loginButton").click()


    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('button[id="loginButton"]').click();
})