// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    navigateTo : (url) => {
      console.log('navigate I')
      this.amOnPage(url)
    },

    loginAs: (username, password) => {
      console.log('login I')
      this.fillField('#UserName', username)
      this.click('Continue')
      this.see('Password')
      this.fillField('#Password', password)
      this.click('Log In')
    }

  });
}
