

describe('rozetka test', () => {

  it('displays two todo items by default', () => {
    var res = []
    cy.visit('https://rozetka.com.ua/ua/notebooks/c80004/')
  //       let aq =  cy.get("body > app-root > div > div > rz-category > div > main > rz-catalog > div > div > aside > rz-filter-stack > div:nth-child(2) > div > rz-scrollbar > div > div.scrollbar__inner > div > div > rz-filter-section-autocomplete > ul > li")
  // for (let index = 0; index < q.length; index++) {
  //   const element = array[index];
    
  // }
        // .then(function($elem) {
  // //  cy.log($elem.text().trim())
  //   res.push($elem.text().trim())
  //   debugger
  //   cy.log(res)
  //   debugger
})

   // cy.get('body > app-root > div > div > rz-main-page > div > main > rz-main-page-content > rz-app-fat-menu-tablet > nav > ul > li:nth-child(1) > a').click()
  
    // cy.get('.todo-list li').should('have.length', 2)
    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })
  //   let aq =  cy.xpath("/html/body/app-root/div/div/rz-category/div/main/rz-catalog/div/div/aside/rz-filter-stack/div[2]/button/span/span")
//   .then(function($elem) {
//   //  cy.log($elem.text().trim())
//     res.push($elem.text().trim())
//  //   cy.log(res)
// })
//  cy.log(res[0])
//  cy.log(res[1])
//  cy.log(res.length)
//     .then(function($elem) {
//   //  this.res = $elem.text()
//    //  this.res =  parseInt(res)
//     res = '222';
//     cy.log(res);
//  })

 


 

for (let index = 0; index < 15; index++) {
  var list = []
  cy.xpath('//span[text()=" Алфавітний вказівник "]/following::rz-scrollbar[1]/div/div/div/div/rz-filter-section-autocomplete/ul/li/a')
  .each(($ele) => {
   list.push($ele)
 })
 .then(() => {
//  const arr2 = arr1.text()
  //.replace(/[^a-zA-Z]+/g, '') //prints Home
  try{
  cy.get(list[index]).click()
  list.length = 0;
}
catch(error){
  cy.get(list[index]).click()
  list.length = 0;
}
 })
  
}



