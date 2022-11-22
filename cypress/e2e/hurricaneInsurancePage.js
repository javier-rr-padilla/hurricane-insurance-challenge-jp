/// <reference types="cypress" />

const { onBuildingMaterialPage } = require("../support/page_objects/buildingMaterialPage")
const { onQuotePage } = require("../support/page_objects/quotePage")
const { onWaterProximityPage } = require("../support/page_objects/waterProximityPage")
const { onZipCodePage } = require("../support/page_objects/zipCodePage")

describe('Test the quote flow', () => {
    beforeEach(() => {
      cy.visit('https://sure-qa-challenge.vercel.app/')

    })

    it('Test the ZIP Code field', () => {
      onZipCodePage.enterValidZipCode(12345)
      onZipCodePage.enterInvalidZipCode(123)
      //onZipCodePage.enterLongZipCode(1111111) - Currently a defect, D01 submitted 11/20/22
      onZipCodePage.submitBlankZipCode()
        
    })

    it('Clicks the Building Material radio buttons', () => {
      onZipCodePage.submitZipCode(12345)
      onBuildingMaterialPage.selectBuildingRadioButtons()

    })

    it('Clicks the Water Proximity radio buttons', () => {
      onZipCodePage.submitZipCode(12345)
      onBuildingMaterialPage.selectStraw()
      onWaterProximityPage.selectWaterRadioButtons()

    })

    it('Completes the Quote flow', () => {
      onZipCodePage.submitZipCode(12345)
      onBuildingMaterialPage.selectBricks()
      onWaterProximityPage.selectYes()
      onQuotePage.verifyCorrectPrices(246, 410)
      onQuotePage.selectFloodProtection()
      
    })

})