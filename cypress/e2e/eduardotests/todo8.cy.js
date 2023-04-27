require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('testik', () => {
cy.visit('https://www.google.com/')
cy.get('body').then((body) => {
  if (cy.xpath('//textarea[@class="gLFyf"]') > 1) {
      cy.get('#APjFqb').type('edward');
  }
  else{
    cy.get('#APjFqb').type('edward');
  }
});

  })
})



  
  






    

        
          
         

  
  
  
    