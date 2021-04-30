const { I, loginPage, homePage } = inject();
const env = require('../config/global')

console.log(`steps url: ${env.credential.url} || user == ${env.credential.username} || pass == ${env.credential.password}`)



Given('I am in login page', () => {
  I.amOnPage(env.credential.url)
  // I.navigateTo(env.credential.url)
});

When('I enter valid login info', () => {
  loginPage.login(env.credential.username, env.credential.password)
});

Then('I should be directed to homepage', () => {
  homePage.dashboardPresent()
});


When('I am on dashboard', () => {
  homePage.dashboardPresent()
});

When('I click on Create Order button', () => {
  I.click(homePage.createOrderBtn)
});

Then('I should be directed to order form', () => {
  I.waitForVisible(homePage.orderForm, 10)
});
