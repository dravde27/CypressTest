require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('testik', () => {
    cy.loginSalesforce()
    cy.xpath('//div[@role="navigation"]/button').click()
    cy.xpath('//input[@placeholder="Search apps and items..."]').type('Leads')
    cy.xpath('//a[@id="Lead"]').click()
    cy.wait(2000)
    cy.xpath('(//a[@title="New"])[1]').click()
    cy.xpath('//span[contains(text(),"Inbound Consumer")]').click()
    cy.xpath('//span[contains(text(),"Next")]').click()
    cy.xpath('//input[@name="firstName"]').type('EDWARD')
    cy.xpath('//input[@name="lastName"]').type('EDWARD2')
    cy.xpath('//input[@name="Email"]').type('ed@mail.com')
    cy.xpath('//input[@name="Phone"]').type('1234567890')
    cy.xpath('//input[@name="Appointment_Date__c"]').type('3/8/2023')
    

  })


})

  
  






    

        
          
         

  
  
  
    