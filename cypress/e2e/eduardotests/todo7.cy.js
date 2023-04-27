require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('testik', () => {
      
     cy.readFile('cypress/support/porsche.jpg')
     .then(file => {
      cy.request({
        method: 'POST',
        url: `https://wacertorder.gaf.energy/api/buckets/upload-file`,
        headers: {
         'content-type': 'multipart/form-data',
          authorization:authorization1,
        },
       // failOnStatusCode: false,
        form: true,
        body: {
          BucketId: 'a0T5500000LE3U7EAL',
          FileName: 'FileName1111',
          DocumentType: '2',
          FileContent: file
        }
      })
    })})})



  
  






    

        
          
         

  
  
  
    