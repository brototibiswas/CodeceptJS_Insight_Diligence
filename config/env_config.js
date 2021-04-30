/**
 * env_conifg.js file is used to manage all the URLs, Credentials of the app
 * 
 * Entire module is exported and can be used from anywhere in the project
 */

const envConfig = { 
    "qa" : {
        "url" : "https://diligenceqa.exiger.com/Auth/Login",
        "cred" : {
            "username" : "tdattacm@exiger.com",
            "password" : "Exiger@12345"
        }
    },
    "stag" : {
        "url" : "https://diligencestaging.exiger.com/Auth/Login",
        "cred" : {
            "username" : "tdattacm@exiger.com",
            "password" : "Admin12345"
        }
    },
    "prod" : {
        "url" : "https://diligence.exiger.com/Auth/Login",
        "cred" : {
            "username" : "tdattacm@exiger.com",
            "password" : "Exiger@12345"
        }
    }
};

module.exports = envConfig;