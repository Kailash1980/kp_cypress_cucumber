/// <reference types ="Cypress"/>

import loginPage from '../pages/loginpage'
import logincrediential from '../../fixtures/login'
let login = new loginPage();

Given('I open login page', async () => {
  await login.enterUrl(logincrediential.url)
})

When('enter user name and password', async () => {
  login.enterUserNameAndPassword(logincrediential.username, logincrediential.password);
})

When('user click on sign in button', async () => {
  login.clickLoginButton()
})

Then('verify correct header text display in landing page', async () => {
  login.verifyLandingPageText()
})
Then('user logout from application', async () => {
  login.clickLogoutLink()
})