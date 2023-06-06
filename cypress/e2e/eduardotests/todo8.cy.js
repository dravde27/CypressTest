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



  
  // cy.waitForNetworkIdlePrepare({
  //   method: '*',
  //   pattern: '*',
  //   alias: 'calls',
  // })
 // cy.waitForNetworkIdle('@calls', 3000)
  //cy.waitForNetworkIdle(1000, { timeout: 50000 }).then(ele => console.log(ele))


  //  cy.intercept('**').as('requests')


    
    // let test = Promise.resolve(true);
    // test.then(el => {
    // while(test){
    //   cy.get('@request').then(el => {test = false
    //      return test})
    //   }
    // })

        
  //   cy.get('@requests.all').each(el => {
  //     if(el.state!=='Received'){
  //       test = false
  //       debugger
  //     }
  // })
//   cy.get('@requests.all')
//   .each((el) => {
//     cy.wrap(el.state).should('eq', 'Complete')
// });

//each(el => cy.wrap(el.response.statusCode)).should('equal', 500)// check last request


//.then(el => cy.wrap(el.response.statusCode)).should('equal', 500)// check last request
  
  
  //.each(el => console.log(el.state + 'eeddward'))

  //.each('have.length', 10)


  //cy.intercept('/**').as("allapirequests")
  // cy.intercept('**').as('requests')
  // cy.get('@requests', { timeout: 30000 })
  // then(el => cy.wrap(el.response.statusCode)).should('equal', 200)// check last request



//   //cy.get('@allapirequests').then(el => cy.wrap(el.response.statusCode)).should('equal', 200)
// //cy.get('@allapirequests').then(el =>console.log(el.state))
// cy.get('@allapirequests.all', { timeout: 30000 }).each(el => cy.wait(cy.wrap(el.state)))
// //.each(el => cy.wrap(el.state)).should('equal', 'Complete')
// //cy.wait('@allapirequests').then(el => cy.wrap(el.state)).should('equal', 'Complete')
// //cy.wait('@allapirequests').then(el => cy.wrap(el.state)).should('equal', 'Complete')






    

        
          
         

  
  
  
    