export class Loginpage{

username_textbox=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
passcode_textbox=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
Loginpage_btn='.oxd-button'
    
enterUsername(username){
    cy.get(this.username_textbox).type(username)
}

enterpasscode(passcode){
    cy.get(this.passcode_textbox).type(passcode)
}

clickbtn(){
    cy.get(this.Loginpage_btn).click()
}

}