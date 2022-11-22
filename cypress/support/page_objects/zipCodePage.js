
export class zipCodePage {
    
    enterValidZipCode(zipValid) {
        cy.get('[data-testid=postalCode]').type(zipValid)
    }

    enterInvalidZipCode(invalidZip) {
        cy.get('[data-testid=postalCode]').clear()
        cy.get('[data-testid=postalCode]').type(invalidZip)
            .find('p')
            .should('contain', 'Invalid zip code')
    }
    //Currently, the Invalid zip code isn't prompting when it should. Defect D01 has been logged 11/20/22
    // enterLongZipCode(zipLong) {
    //     cy.get('[data-testid=postalCode]').clear()
    //     cy.get('[data-testid=postalCode]').type(zipLong)
    //         .find('p')
    //         .should('contain', 'Invalid zip code')
    // }

    submitZipCode(zip) {
        cy.get('[data-testid=postalCode]').type(zip)
        cy.contains('button', 'Get a quote').click()
    }

    submitBlankZipCode() {
        cy.get('[data-testid=postalCode]').clear()
            .find('p')
            .should('contain', 'Required')
    }


}

export const onZipCodePage = new zipCodePage()