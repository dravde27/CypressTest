require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('testik', () => {
    cy.visit('https://stgorder.gaf.energy/?x-recaptcha-id=094c59a8-920e-4a65-b1cb-bad4c226181c')
    cy.get('[data-testid="open-login-page-btn"]').click()
    cy.get('[aria-label="Email"]').type('tebag73404@storypo.com')
    cy.get('[aria-label="Password"]').type('Test12345*')
    cy.get('[type="submit"]').click()
    cy.wait(7000)
    cy.contains('Macey Herman').click()
    cy.visit({
      url: 'https://stgorder.gaf.energy/dashboard/0-80123000002z4VqAAI',
      failOnStatusCode: false
    })
    cy.wait(7000)
    cy.xpath('//*[@aria-label="icon-delete"]').then(($el) => {
      console.log($el)
      let a = 1
       while ($el.length) {
        cy.xpath(`(//*[@aria-label="icon-delete"])[${a}]`).click({force: true })
        cy.xpath('//button[contains(text(),"Delete")]').click({force: true })
        $el.length--
        a++
        cy.wait(10000)
        console.log(a)
      } 
      });
})
})
