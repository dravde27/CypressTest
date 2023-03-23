require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    cy.loginSalesforce()
 //    cy.visit('https://gafenergy--stg.sandbox.lightning.force.com/lightning/r/Lead/00Q23000007hX00EAE/view')
  //  cy.get('[class= "slds-button slds-show"]')

  // cy.get(".uiContainerManager").then(function ($iframe) {
  //   const content = $iframe.contents().find('.slds-button.slds-show')
  //   cy.log(content)
  //   })
  //cy.get("[data-data-rendering-service-uid='141']")
  cy.get('[data-data-rendering-service-uid="141"]').then(function ($iframe) {
      const content = $iframe.contents().find('.slds-button.slds-show')
       cy.wrap(content).click()
      })

})
  })
    //  cy.xpath('//button[@class= "slds-button slds-show"]').click()
    //  cy.xpath('//input[@placeholder="Search apps and items..."]').type('Leads')
     //   cy.wait(8000)
  // //  cy.xpath('//button[@title="Edit Lead Status"]').click()
  // cy.get('[title="Edit Lead Status"]').click()
  //   cy.xpath('//ul[@role="listbox"]/li').then(items => {
  //   cy.get(items[0]).invoke('attr', 'data-name').should('eq', 'Open');
  //   cy.get(items[1]).invoke('attr', 'data-name').should('eq', 'Under Review');
  //   cy.get(items[2]).invoke('attr', 'data-name').should('eq', 'Chasing');
  //   cy.get(items[3]).invoke('attr', 'data-name').should('eq', 'Negotiating');
  //   cy.get(items[4]).invoke('attr', 'data-name').should('eq', 'Disqualified');
  //   cy.get(items[5]).invoke('attr', 'data-name').should('eq', 'converted');
//data-name="Chasing"

   

    //  cy.xpath('//button[@class= "slds-button slds-show"]').click()
    //  cy.xpath('//input[@placeholder="Search apps and items..."]').type('Leads')
    //  cy.xpath('//a[@id="Lead"]').click()
    // cy.xpath('//div[@title="New"]').click()
    // cy.xpath('(//span[@class="slds-radio--faux"])[3]').click()
    // cy.xpath('(//button[@type="button"]/span[contains(text(),"Next")])[last()]').click()
    // cy.xpath('//input[@name="Company"]').type('TestLead')
    // cy.xpath('//input[@name="lastName"]').type('LastNameTet')
    // cy.xpath('//button[@aria-label="GAF Chase Source, --None--"]').click()
    // cy.xpath('//span[contains(text(),"Chase List")]').click()
    // cy.xpath('(//button[contains(text(),"Save")])[last()]').click()

  






    

        
          
         

  
  
  
    