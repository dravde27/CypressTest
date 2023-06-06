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
    cy.wait(5000)
    cy.contains('Macey Herman').click()
 
   
    cy.wait(7000)

    const orderURL = cy.url()
    orderURL.then(order => cy.wrap(order).as('jobURL'))


    cy.visit('https://www.google.com.ua/')
    cy.get('@jobURL').then(ele => {

      cy.visit({
        url: ele,
        failOnStatusCode: false
      })


    })
    cy.wait(5000)


//       cy.visit({
//         url: '@jobURL',
//         failOnStatusCode: false
//       })
// cy.wait(5000)

// cy.get('@jobURL').then(link1 => cy.visit({
//   url: link1,
//   failOnStatusCode: false}))
//     })
})})
