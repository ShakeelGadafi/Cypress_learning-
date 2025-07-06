import { Loginpage } from "./loginPAge/loginpage"

const loginPage = new Loginpage

describe('Login page ',function(){

    beforeEach(function(){
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

it('demo 1', function(){

  

    loginPage.enterUsername('Admin')
    loginPage.enterpasscode("admin123")
    loginPage.clickbtn()


})

it('demo 2', function(){



    loginPage.enterUsername('Admin')
    loginPage.enterpasscode("admin123")
    loginPage.clickbtn()


})

})