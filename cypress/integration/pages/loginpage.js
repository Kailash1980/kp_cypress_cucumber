/// <reference types ="Cypress"/>

var userNameXpath = '#username'
var userPasswordXpath = '#password'


class LoginPage {
enterUrl(url) {
    cy.visit(url)
  }

  enterUserNameAndPassword(valueUserName, valueUserPassword) {
    const userName = cy.get(userNameXpath) //Enter value in user name or email field
    userName.clear
    userName.type(valueUserName)
    const password = cy.get(userPasswordXpath) //Enter value in password field
    password.clear
    password.type(valueUserPassword)
  }
  clickLoginButton() {
    cy.get("[type = 'submit']").contains('Sign in').should('be.visible').click()
  }

  verifyLandingPageText() {
    cy.contains('Welcome to The SSAT').should('be.visible')
  }

  clickLogoutLink() // Click Logout link 
  {
    cy.contains('Log Off').should('be.visible').click();
    //cy.wait(3000)
  }

}

export default LoginPage