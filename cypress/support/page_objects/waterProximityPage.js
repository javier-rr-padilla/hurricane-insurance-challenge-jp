
export class waterProximityPage {

    selectWaterRadioButtons() {
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
            
        })
    }

    selectYes() {
        cy.get('[value="true"]').click()
        cy.get('[type="submit"]').click()
    }

    selectNo() {
        cy.get('[value="false"]').click()
        cy.get('[type="submit"]').click()
    }

}

export const onWaterProximityPage = new waterProximityPage()