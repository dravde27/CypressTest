require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

   it('testik', () => {
  
  cy.readFile('cypress/support/porsche.jpg', 'binary')
  .then(file => {
    const blob = Cypress.Blob.binaryStringToBlob(file);
    const formData = new FormData();
    formData.append('BucketId', 'a0T5500000LE3U7EAL');
    formData.append('FileName', 'FileName1111.jpg');
    formData.append('DocumentType', '2');
    formData.append('FileContent', blob);
   cy.request({
     method: 'POST',
     url: `https://wacertorder.gaf.energy/api/buckets/upload-file`,
     headers: {
        "content-type": "multipart/form-data",
        authorization:token,
     },
     body: formData,
   }).then(response => console.log(response))
  })
 })

})




  
  






    

        
          
         

  
  
  
    