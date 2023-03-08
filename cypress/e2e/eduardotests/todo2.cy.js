describe('example to-do app', () => {


  it('displays two todo items by default', () => {
    
    const str ='"Eduard Kvasenko has invited you to the GAF Energy Partner Portal. Create your account to get started.\n\nHi TestQQ,\n\nYou have been invited to the GAF Energy Partner Portal by Eduard Kvasenko.\n\nThe Partner Portal is the place to manage all your projects with GAF Energy. You can use the Partner Portal to create and review your proposal requests, place product orders, and keep track of your jobs.\n\nCreate your account >>> https://qaorder.gaf.energy/invite?secret=0300000iisfiAAA-21868a2d21d1c99d04e562c2b90c1867f9bc55e-658f\n\nThis email was sent from a notification-only address that cannot accept incoming messages. \t\t\t\t\t\tPlease do not reply to this email.\n\nThis is a transactional email. If you think you have received this in error, please notify christie.streeter@gaf.energy.invalid.\n\n© 2023 GAF Energy LLC | 5981 Optical Court, San Jose, CA 95138",'

// function detectURLs(message) {
//     var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
//     return message.match(urlRegex).toString()
//   }

//   const html = 'Visit www.cluemediator.com and subscribe us on https://www.cluemediator.com/subscribe for regular updates.'
//   const lol = detectURLs(str)
   cy.wait(3000)
//   cy.log(lol)
//   cy.request({
//     method: "GET",
//     url: "https://qaorder.gaf.energy/resetpassword?secret=0300000TDRCMAA5-4609d3d3335188514cc02ad860a41867fe2ae76-4658",
//     failOnStatusCode: false
// })
  cy.visit('https://qaorder.gaf.energy/resetpassword?secret=0300000TDRCMAA5-4609d3d3335188514cc02ad860a41867fe2ae76-4658', {failOnStatusCode: false})
  cy.wait(3000)
  //cy.visit('/abcde', );
  // cy.log(lol)
  // console.log(lol)
  })})



  