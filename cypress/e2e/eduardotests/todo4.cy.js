Cypress.on('uncaught:exception',(err, runnable)=>{
  return false;
})
describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    // cy.visit('https://crossbrowsertesting.github.io/drag-and-drop.html')
    // cy.get('[id = "draggable"]').drag('[id = "droppable"]', {force: true})
    cy.visit('https://stgmy.gaf.energy/?x-recaptcha-id=094c59a8-920e-4a65-b1cb-bad4c226181c')
    cy.get('[data-testid="open-login-page-btn"]').click()
    cy.get('[data-testid="email"]').type('verod93471@smuvaj.com')
    cy.get('[data-testid="password"]').type('Qwerty12345')
    cy.get('[data-testid="login-button"]').click()
    cy.get('[data-testid="header-active"]').click()

    // cy.get('.sourceitem').drag('.target').then((success) => {
    //   assert.isTrue(success)
    // })
   
    
    // cy.get('#root > div > main > section > div:nth-child(5) > div:nth-child(3) > div.AnalyzePage_drag_icon_wrapper__UnvaF').then(el => {
    //   let el1 = el
    //   cy.get('#root > div > main > section > div:nth-child(5) > div:nth-child(1) > div.AnalyzePage_drag_icon_wrapper__UnvaF')
    // .drag('#root > div > main > section > div:nth-child(5) > div:nth-child(3) > div.AnalyzePage_drag_icon_wrapper__UnvaF', {force: true})
    // // for (let index = 0; index < 2; index++) {
    // //   cy.get(el1).click({force: true})
    // // }
    //  })
  cy.wait(3000)
  cy.get('[data-testid ="dropdown-selection"]').click()
  cy.get('[data-testid ="clear-button"]').click()
  cy.get('label:nth-child(1) > input').click()
  cy.get('label:nth-child(2) > input').click()
  cy.get('label:nth-child(3) > input').click()
  cy.get('[data-testid = "apply-button"]').click()

let a = 'div:nth-child(1) > div.AnalyzePage_drag_icon_wrapper__UnvaF'
let b = 'div:nth-child(2) > div.AnalyzePage_drag_icon_wrapper__UnvaF'
let c = 'div:nth-child(3) > div.AnalyzePage_drag_icon_wrapper__UnvaF'

cy.wait(3000)
  cy.dragAndDrop(a,c)
  cy.wait(3000)
  cy.dragAndDrop(b,c)


  function checkEl1(){
    cy.get( 'div:nth-child(1) > div.AnalyzePage_content__DQmC0 > span:nth-child(2)')
    .then(musicText => {
     expect(musicText.text()).to.equal('of coffee brewed')
    })
  }

  function checkEl2(){
    cy.get( 'div:nth-child(2) > div.AnalyzePage_content__DQmC0 > span:nth-child(2)')
    .then(musicText => {
     expect(musicText.text()).to.equal('of dishes washed')
    })
  }
  
  function checkEl3(){
    cy.get( 'div:nth-child(3) > div.AnalyzePage_content__DQmC0 > span:nth-child(2)')
    .then(musicText => {
     expect(musicText.text()).to.equal('of laptop user')
    })
  }
  checkEl1()
  checkEl2()
  checkEl3()

})
})


    

        
          
         

  
  
  
    