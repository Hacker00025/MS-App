// Replace YOUR_CLIENT_ID and YOUR_REDIRECT_URI with your app's client ID and redirect URI.
const clientId = 'e0d2bd38-3bfe-4214-a9db-96ad5dcc8469';
const redirectUri = 'http://localhost';
const graphScopes = ['user.read']; // Add necessary scopes

// Initialize the MSAL library
const msalConfig = {
    auth: {
        clientId: clientId,
        redirectUri: redirectUri,
    },
};
let myMSALObj;  // Declare myMSALObj in the global scope

// Function to sign in
async function signIn() {
    console.log('Attempting to sign in...');
    const loginRequest = {
        scopes: graphScopes,
    };

    try {
        // Initialize myMSALObj if it hasn't been initialized yet
        if (!myMSALObj) {
            myMSALObj = new msal.PublicClientApplication(msalConfig);
        }

        const loginResponse = await myMSALObj.loginPopup(loginRequest);
        console.log('id_token acquired at: ' + new Date().toString());
        console.log(loginResponse);
    } catch (error) {
        console.error('Error during sign-in:', error);
    }
}

// Function to sign out
function signOut() {
    // Check if myMSALObj is defined before calling logout
    if (myMSALObj) {
        myMSALObj.logout();
        console.log('User signed out');
    } else {
        console.warn('myMSALObj is not defined');
    }
}

// Function to call Microsoft Graph API
async function callGraphAPI() {
    // Check if myMSALObj is defined before using it
    if (myMSALObj) {
        // Rest of the code for calling Graph API
    } else {
        console.warn('myMSALObj is not defined');
    }
}

// ...
