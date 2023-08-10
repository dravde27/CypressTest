require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('testik', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('lol')
})})
