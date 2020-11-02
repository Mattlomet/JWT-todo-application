context("Login", () => {


    it("Login via homepage>login page : should get forwarded to profile after", () => {

        cy.visitHomePage();


        cy.get('div[id="loginButton"]').click()


        cy.get('input[id="username"]').type("matttest");
        cy.get('input[id="password"]').type("root123");
        cy.get('button[id="loginButton"]').click();


    });


    it("Login via homepage>login nav bar>login page : should get forwarded to profile after", () => {

        cy.visitHomePage();


        cy.get('a[id="loginNavBar"]').click()


        cy.get('input[id="username"]').type("matttest");
        cy.get('input[id="password"]').type("root123");
        cy.get('button[id="loginButton"]').click();


    });
});