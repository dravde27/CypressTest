require('cypress-xpath');
Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('testik', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMDMyMzAwMDAwWWIxUUVBQVoiLCJjb21wYW55SWQiOiIwMDE0VDAwMDAwV2VKQ2hRQU4iLCJjb21wYW55TmFtZSI6IklkZWFsIFJvb2ZpbmciLCJyb2xlIjoiQWRtaW4iLCJhdXRob3JpemVkVG9TZWxsIjoiVHJ1ZSIsImVtYWlsIjoidGViYWc3MzQwNEBzdG9yeXBvLmNvbSIsImFzc2lzdGVkQnlBZG1pbiI6IkZhbHNlIiwiZXhwIjoxNjgzOTM5NTgwLCJpc3MiOiJnYWZlLXBvcnRhbC1zdGctMSIsImF1ZCI6ImdhZmUtcG9ydGFsLXN0Zy0xIn0.5bvV1wZqzoRicXcCM6ABcY1Lc0yVNpnqkmPHoiQaBMM'
    const authorization = `bearer ${ token }`;
    cy.request({
      method: "GET",
      url: 'https://wastgorder.gaf.energy/api/auth/userinfo',
      headers: {
        authorization,      
      }
      }).then(function(response){
        console.log(response)  // maps the response to it's body
      })
})})
