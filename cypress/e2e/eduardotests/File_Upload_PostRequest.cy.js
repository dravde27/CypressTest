require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

   it('testik', () => {
  let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMDM1NTAwMDAxTVhLdGhBQUgiLCJjb21wYW55SWQiOiIwMDE1NTAwMDAxWFM3dXpBQUQiLCJjb21wYW55TmFtZSI6IklkZWFsIFJvb2ZpbmcgTExDIiwicm9sZSI6IkFkbWluIiwiYXV0aG9yaXplZFRvU2VsbCI6IlRydWUiLCJlbWFpbCI6Imxla2ljZXI1OTdAb2N0b3ZpZS5jb20iLCJhc3Npc3RlZEJ5QWRtaW4iOiJGYWxzZSIsImV4cCI6MTY4MjUwODg1MywiaXNzIjoiZ2FmZS1wb3J0YWwtY2VydC0xIiwiYXVkIjoiZ2FmZS1wb3J0YWwtY2VydC0xIn0.oKO2fHeNnA6twv5193FQr_rPKp123ElNPlw9GXGm9ek'
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




  
  






    

        
          
         

  
  
  
    