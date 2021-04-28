/**
 * Configuration: Profile
 * **********************
 * Send dev environment through command line using : --profile 
 * No need to send --profile for qa. Credentials are set to qa by default
 * For staging: npx codeceptjs run --steps --profile stag
 * For production: npx codeceptjs run --steps --profile prod
 * 
 * 
 * Export object with URL, Username, Password that can be accessed from any modules in project
 */

const env = process.env.profile
const dev_env = require('./env_config')

let host = dev_env.qa.url;
let username = dev_env.qa.username;
let password = dev_env.qa.password;

if(env === "stag" || env === "prod") {
    host = dev_env[env].url
    username = dev_env[env].cred.username
    password = dev_env[env].cred.password
}

console.log(`global url: ${host} || user == ${username} || pass == ${password}`)

exports.cred = {
    "url" : host,
    "username" : username,
    "password" : password
}