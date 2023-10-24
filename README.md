## This is an app to demonstrate securing the react app usign OAuth

##  How to Spin up?

1. Login/Create an Account in AUTH0.
2. Create a spa react app, note down the domain and clientid.
3. Configure following OAUTH credentials in the file react-secure-app/Client/src/auth_config.json

    {
    "domain": "<domian>",
    "clientId": "<clientID>"
    }
4. got to Client & Server folder and run npm start to kick start the server
5. You can now login to the application via OAuth.