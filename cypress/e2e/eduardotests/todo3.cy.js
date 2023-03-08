describe('example to-do app', () => {
function detectURLs(message) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.match(urlRegex).toString()
  }

    it('displays two todo items by default', () => {
      let result
        cy.request("GET", "https://www.1secmail.com/api/v1/?domain=1secmail.com&action=getMessages&login=userforresetpassword").then((response) => {
     //    result = response.body.id    
        expect(response.status).to.eq(200)
        result = response.body[0].id
        return result
     //  cy.log(result)
          }).then(result => {
          //  cy.log(result)
            cy.log(result)
            cy.request("GET",`https://www.1secmail.com/api/v1/?action=readMessage&login=userforresetpassword&domain=1secmail.com&id=${result}`).then(response => {
                result = response.body.textBody
                result =  detectURLs(result)
          //  cy.visit('https://qaorder.gaf.energy/resetpassword?secret=0300000iizaCAAQ-925a420b5130781e0dc6d021602186838df38b-1961', {failOnStatusCode: false})
              //  cy.wait(5000)
              //  cy.wait(5000)
                cy.visit('https://stgorder.gaf.energy/?x-recaptcha-id=094c59a8-920e-4a65-b1cb-bad4c226181c')
                cy.wait(2000)
                cy.visit(result, {failOnStatusCode: false})
                cy.log(result)
                cy.get('input[data-testid="new-password-input"]').type('Test12345*')
                cy.get('input[data-testid="confirm-password-input"]').type('Test12345*')
                cy.get('button[type="submit"]').click()
                cy.get('.SuccessfullyChangedPassword_sub_title__hmqFt')
            })

          })
        
          
         

    })



})
  
  
  
    