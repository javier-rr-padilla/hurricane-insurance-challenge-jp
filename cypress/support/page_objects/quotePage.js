
export class quotePage {

    verifyCorrectPrices(standard, complete) {
        cy.wait(500)
        cy.get('form').find('[data-testid="price_Standard"]').should('contain', standard)
        cy.get('form').find('[data-testid="price_Complete"]').should('contain', complete)
    }
    
    selectFloodProtection() {
        cy.get('[data-testid="price_FloodProtection"]').click()
    }

}

export const onQuotePage = new quotePage()