let randomNumber = Math.floor(Math.random()*100);

let accountName = "newaccount"+randomNumber;





context("signup for todo application", () => {

    beforeEach(()=>{
        cy.visitHomePage();
        cy.get(".signUpNavBar").click();
    })

    it("sign up: Happy Path > login >> profile > 1.home 2.todo 3.user", () => {

        cy.signUp();
        cy.wait(2000)
    });







    it("should alert user that username is too short", ()=>{
        cy.get(".usernameInput").type("ab"+"{enter}");
        cy.get(".alert").contains("The username must be between 3 and 20 characters.")
        cy.wait(2000)

    })


    it("should alert user that email is not in proper format", ()=>{
        cy.get(".usernameInput").type(accountName);
        cy.get(".emailInput").type("email"+"{enter}");
        cy.get(".alert").contains("This is not a valid email.")
        cy.wait(2000)

    })


    it("should alert user that password is too short", ()=>{
        cy.get(".usernameInput").type(accountName);
        cy.get(".emailInput").type(accountName+"@gmail.com");
        cy.get(".passwordInput").type("ab"+"{enter}")
        cy.get(".alert").contains("The password must be between 6 and 40 characters.")
        cy.wait(2000)

    })







//it should be able to navigate to all different pages from end


});