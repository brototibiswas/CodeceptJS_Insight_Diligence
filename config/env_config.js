//envConifg.js file is used to manage all the URLs of the app

const envConifg = { 
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
            "password" : "Exiger1234567"
        }
    }
};

module.exports = envConifg;