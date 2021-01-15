describe("first test suite for beer store", function () {

    beforeEach(()=>{
        console.log("New Test Case")
    })
    it("visits beer store", function () {
        cy.visit("https://sunilkumarvj.github.io/gatsby-demo/")

    })


    it("check navigation", function () {
        cy.visit("https://sunilkumarvj.github.io/gatsby-demo/")



        cy.get('.beer').contains("Beer Store")
        cy.get('.ytube').click()
        cy.get('.home > a').click()
        //cy.get('.quot > a').click()
        cy.get('.i').click()
    })


    it("test beer products", function () {
        cy.visit("/")
        cy.get('.bottle').click()

        cy.get('.beer').contains("Beer Store")
        //   cy.get('.mainprodp ').each()

        cy.get('.mainprodp > :nth-child(n)').should('have.length',10)

        cy.get(':nth-child(n) > .desc > .title ').should('have.length',10)

        cy.get(':nth-child(n) > .desc > .description ').should('have.length',10)

        cy.get(':nth-child(n) > .desc > .price ').should('have.length',10)

        cy.get('.mainprodp > :nth-child(1)').click({ multiple: true })

        // cy.get(':nth-child(1) > .desc > .title ').should('match',/Stein/)

        cy.get(':nth-child(1) > .desc > .title ').should('contain',"Stein")

        cy.get(':nth-child(1) > .desc > .description').contains("Description")

        cy.get(':nth-child(1) > .desc > .price').contains("Price")

        //cy.get(':nth-child(1) > .desc > .price').should("match",/Price:/)

        cy.get(':nth-child(1) > .bttn > .buy-button > span').click()




        //cy.get(':nth-child(1) > .desc > .title ').contains("Straight Stein")

        // cy.get(':nth-child(n) > .bttn > .buy-button > span').click({ multiple: true })
    })


    it("test beer lovers", function () {
        cy.visit("https://sunilkumarvj.github.io/gatsby-demo/")
        cy.get('.home > a').click()
        cy.get('.center').contains("Beer & Food Pairing")
        //cy.get(':nth-child(1) > :nth-child(4) > a > .black').click()

        cy.get('.mainwhole > :nth-child(n)').should('have.length',8)

        cy.get('.mainwhole > :nth-child(n) > img').should('have.length',8)

        cy.get(':nth-child(n) > :nth-child(2) > strong').should('have.length',8)

        cy.get(':nth-child(n) > .content1 > p').should('have.length',8)

        cy.get('.mainwhole > :nth-child(n) > :nth-child(4)').should('have.length',8)
    })

    it.skip("test about us", function () {
        cy.visit("/")
        cy.get('.quot > a').click()
        cy.url().should('include',"The_Beer_Store")    
    })
})