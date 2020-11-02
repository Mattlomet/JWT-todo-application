let randomNumber = Math.floor(Math.random()*1000);

let accountName = "newaccount"+randomNumber;


Cypress.Commands.add("signUp", ()=> {
    cy.get(".signUpNavBar").click();


    cy.get(".usernameInput").type(accountName);
    cy.get(".emailInput").type(accountName+"@gmail.com");
    cy.get(".passwordInput").type("root123");
    cy.get(".btn-block").click();

})