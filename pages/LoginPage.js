const { I } = inject();

module.exports = {

  // Login page locators
  fields: {
    username: '#UserName',
    password: '#Password'
  },
  
  loginButton: 'Log In',

  login(username, password) {
    I.fillField(this.fields.username, username)
    I.fillField(this.fields.password, password)
    I.click(this.loginButton)
  }
}
