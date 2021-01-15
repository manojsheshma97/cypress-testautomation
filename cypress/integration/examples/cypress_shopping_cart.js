describe("Shopping Cart", ()=>{
    beforeEach(()=>{
        cy.visit("https://sunilkumarvj.github.io/React-Snipcart-practice/#/")
        

    })
    it ("visit home page",()=>{
        cy.get('u').contains("Sunil Shopping Cart")
        let items=15;
        cy.get(':nth-child(n) > img ').should("have.length",items)
        cy.get(':nth-child(n) > .title').should("have.length",items)
        cy.get(':nth-child(n) > .Id').should("have.length",items)
        cy.get(':nth-child(n) > .Maker').should("have.length",items)
        cy.get(':nth-child(n) > .Description').should("have.length",items)
        cy.get(':nth-child(n) > :nth-child(5)>i ').should("have.length",items)
        cy.get(':nth-child(n) > .buy-button').should("have.length",items)
    })


    it("test add to card",()=>{
        cy.get(':nth-child(1) > .buy-button').click()
        //cy.get('.snipcart-modal__close-title').click()
        //cy.get(':nth-child(1) > .buy-button').click()
        cy.get('.snipcart-cart-button__content').click()
        cy.get('#name').type("Manoj")
        //cy.get('#name').contains("Manoj")
        cy.get('#email').type("m@gmail.com")
        //cy.get('#email').contains("m@gmail.com")
        cy.get('#address1').type("Sikar")
        cy.get('#address2').type("Raj")
        cy.get('#city').type("Sikar")
        cy.get('#postalCode').type(332001)
        cy.get('.snipcart-cart-button').click()
       // cy.get('iframe')
        //cy.get('.snipcart-cart-button').click()
    })


    it.only("add multiple products to card",()=>{
        cy.get(':nth-child(1) > .buy-button').click()
    
        //cy.get('.snipcart-modal__close-title').click()
        //cy.get(':nth-child(1) > .buy-button').click()
       cy.get('.snipcart-modal__close-title').click()
        cy.get(':nth-child(2) > .buy-button').click()
        //cy.contains('Black').select('Gold')
        //cy.get(':nth-child(1)  .snipcart__icon--red path').click({multiple:true})


    })
})