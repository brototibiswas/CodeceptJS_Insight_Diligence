const { I } = inject();
const env = require('../config/global')

console.log(`steps url: ${env.cred.url} || user == ${env.cred.username} || pass == ${env.cred.password}`)

Given('I am in login page', () => {
  // I.amOnPage('/')
  I.amOnPage(env.cred.url)
});

When('I enter valid login info', () => {
  I.fillField('#UserName', env.cred.username);
    I.see('Password')
    I.fillField('#Password', env.cred.password);
    I.click('Log In')
});

Then('I should be directed to homepage', () => {
  I.see('Dashboard', 'h2')
});
