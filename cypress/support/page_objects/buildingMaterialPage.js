
export class buildingMaterialPage {

    selectBuildingRadioButtons() {
        cy.wait(500)
        cy.get('form').find('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons)
                .eq(0)
                .click()
                .should('be.checked')

                cy.wrap(radioButtons)
                    .eq(1)
                    .click()
                    
                    cy.wrap(radioButtons)
                        .eq(0)
                        .should('not.be.checked')
                
                        cy.wrap(radioButtons)
                            .eq(2)
                            .click()

                            cy.wrap(radioButtons)
                                .eq(1)
                                .should('not.be.checked')
                
        })
    }
    
    selectStraw() {
        cy.get('[data-testid=straw]').click()
        cy.get('[type="submit"]').click()

    }

    selectSticks() {
        cy.get('[data-testid=sticks]').click()
        cy.get('[type="submit"]').click()
    }

    selectBricks() {
        cy.get('[data-testid=bricks]').click()
        cy.get('[type="submit"]').click()
    }


}

export const onBuildingMaterialPage = new buildingMaterialPage()