context("a new user navigates to the todo section and is able to interact with the table",()=>{


    let randomNumber = Math.floor(Math.random()*1000);

    let accountName = "newaccount"+randomNumber;

    let accountEmail = accountName+"@gmail.com"

    beforeEach(()=>{
        cy.visitHomePage();
        cy.get(".signUpNavBar").click();
        cy.get(".usernameInput").type(accountName);
        cy.get(".emailInput").type(accountEmail);
        cy.get(".passwordInput").type("root123");
        cy.get(".btn-block").click();

        cy.wait(2000)

        cy.login(accountName,"root123")

        cy.wait(2000)

        cy.get(".todoNavBar").click();

    })


    it('should allow a user to create a todo, update that todo and delete that todo',()=>{

        //create a new todo
        cy.get(".labelInput").type("test todo label");
        cy.get(".todoInput").type("test todo description")
        cy.get(".submitButton").click();
        cy.wait(2000)



        //ensure update works
        cy.get(".completed").contains("false")
        cy.get(".update").click();
        cy.wait(2000)
        cy.get(".completed").contains("true")


        cy.wait(2000)

        //ensure delete works
        cy.get(".delete").click()

    })






})