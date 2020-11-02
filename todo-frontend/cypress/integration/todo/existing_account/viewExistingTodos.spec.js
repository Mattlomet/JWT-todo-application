// this test will sign in as an exisiting user with mulitple todos to load in



//test one: ensure all todos load
//test two: update a todo with a certain id and ensure it changes from false>>true on finish click
//test three: delete a todo
//test four: add a todo to ensure the number stays constant on this acc XD

context("view existing todos", () => {

    beforeEach(()=>{
        cy.visitHomePage();
        cy.login("matttest","root123")
    })
    

    it("after login visit todos (should be 3 todos)", () => {

        cy.get('.todoNavBar').click()

        cy.get(".labelInput").type("test todo label");
        cy.get(".todoInput").type("test todo description")
        cy.get(".submitButton").click();
        cy.wait(2000)



        //ensure update works
        cy.get(":nth-child(5) > .completed").contains("false")
        cy.get(":nth-child(5) > .update > .material-icons").click();
        cy.wait(2000)
        cy.get(":nth-child(5) > .completed").contains("true")


        cy.wait(2000)

        //ensure delete works
        cy.get(":nth-child(5) > .delete > .material-icons").click()

    });


});