export class Loginpage{
enterUsername(username){
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
}

enterpasscode(passcode){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(passcode)
}

clickbtn(){
    cy.get('.oxd-button').click()
}

}