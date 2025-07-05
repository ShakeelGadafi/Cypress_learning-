import { Loginpage } from "./loginPAge/loginpage"

const loginPage = new Loginpage

it('page onject model', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginPage.enterUsername('Admin')
    loginPage.enterpasscode("admin123")
    loginPage.clickbtn()


})