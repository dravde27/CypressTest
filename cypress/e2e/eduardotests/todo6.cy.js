require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('testik', () => {
 
  //  cy.readFile('cypress/support/porsche.jpg')
  //  .then((file) => Cypress.Blob.binaryStringToBlob(file))
  //  .then((blob) => {
  //   var formdata = new FormData();
  //   formdata.append("file", blob, "xml.xml");
  //   cy.request({
  //     method: 'POST',
  //     url: `https://wacertorder.gaf.energy/api/buckets/upload-file`,
  //     headers: {
  //       authorization:authorization1,
  //       'content-type': 'multipart/form-data'
  //     },
  //    // failOnStatusCode: false,
  //     form: true,
  //     body: {
  //       BucketId: 'a0T5500000LE3U7EAL',
  //       FileName: 'FileName1111',
  //       DocumentType: '1',
  //       FileContent: file
  //     }
  //   })
  // })})})

  cy.visit('https://certorder.gaf.energy/?x-recaptcha-id=4f08b4d1-3472-47c2-9af5-93ff42cce179')
  cy.intercept('https://wacertorder.gaf.energy/api/auth/userinfo').as('waitForAPItoRespond')
  //localStorage.setItem('gaf-pp-storage', '{"userCompanyId":"0015500001XS7uzAAD","portalAccessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMDM1NTAwMDAxTVhLdGhBQUgiLCJjb21wYW55SWQiOiIwMDE1NTAwMDAxWFM3dXpBQUQiLCJjb21wYW55TmFtZSI6IklkZWFsIFJvb2ZpbmcgTExDIiwicm9sZSI6IkFkbWluIiwiYXV0aG9yaXplZFRvU2VsbCI6IlRydWUiLCJlbWFpbCI6Imxla2ljZXI1OTdAb2N0b3ZpZS5jb20iLCJhc3Npc3RlZEJ5QWRtaW4iOiJGYWxzZSIsImV4cCI6MTY4MjUwNTY4NiwiaXNzIjoiZ2FmZS1wb3J0YWwtY2VydC0xIiwiYXVkIjoiZ2FmZS1wb3J0YWwtY2VydC0xIn0.EAuGH0Cizn5jqXiJ4Cu8dgXClXZzNU_uJRVtiL3L35k"}');
    cy.get('#main_content_container > div > main > button').click()
    cy.get('[data-testid="input-login"]').type('lekicer597@octovie.com')
    cy.get('[data-testid="input-password"]').type('Test12345*')
    cy.get('[data-testid="login-btn"]').click()    
    cy.wait(5000)
   
    cy.get('@waitForAPItoRespond').then(el => console.log(el))
   
    
    // cy.wait('@waitForAPItoRespond').then(el=> console.log(el))

    // cy.intercept('GET', 'https://wacertorder.gaf.energy/api/auth/userinfo', {
    //   headers: {
    
    //     //       'content-type': 'multipart/form-data'
    //          },
    // }).as('waitForAPItoRespond')
    // cy.wait('@waitForAPItoRespond').then(el=> console.log(el))






    // cy.intercept(
    //   {
    //     url: 'https://wacertorder.gaf.energy/api/auth/userinfo',

    //     headers: {
    
    //     },
    
    //   }).as('waitForAPItoRespond').then(el=> console.log(el))



      
      

    // cy.wait(3000)
 // cy.intercept("POST", "https://o4504750641053696.ingest.sentry.io/api/4504751989719040/envelope/?sentry_key=0446e556df1e46a9a6f0106e83e07d22&sentry_version=7&sentry_client=sentry.javascript.react%2F7.47.0")
    // headers: {
    //     authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMDM1NTAwMDAxTVhLdGhBQUgiLCJjb21wYW55SWQiOiIwMDE1NTAwMDAxWFM3dXpBQUQiLCJjb21wYW55TmFtZSI6IklkZWFsIFJvb2ZpbmcgTExDIiwicm9sZSI6IkFkbWluIiwiYXV0aG9yaXplZFRvU2VsbCI6IlRydWUiLCJlbWFpbCI6Imxla2ljZXI1OTdAb2N0b3ZpZS5jb20iLCJhc3Npc3RlZEJ5QWRtaW4iOiJGYWxzZSIsImV4cCI6MTY4MjUwNTY4NiwiaXNzIjoiZ2FmZS1wb3J0YWwtY2VydC0xIiwiYXVkIjoiZ2FmZS1wb3J0YWwtY2VydC0xIn0.EAuGH0Cizn5jqXiJ4Cu8dgXClXZzNU_uJRVtiL3L35k',
    //   }
//  .as('waitForAPItoRespond')


})})


  
  






    

        
          
         

  
  
  
    