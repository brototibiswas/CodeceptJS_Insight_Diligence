const { I } = inject();
const env = require('../config/global')

console.log(`steps url: ${env.credential.url} || user == ${env.credential.username} || pass == ${env.credential.password}`)

Given('I am in login page', () => {
  // I.amOnPage(env.credential.url)
  I.navigateTo(env.credential.url)
});

When('I enter valid login info', () => {
  // I.fillField('#UserName', env.credential.username);
  //   I.see('Password')
  //   I.fillField('#Password', env.credential.password);
  //   I.click('Log In')
  I.
  I.loginAs(env.credential.username, env.credential.password)
});

Then('I should be directed to homepage', () => {
  I.see('Dashboard', 'h2')
});


After(() => {
  I.clearCookie();
});