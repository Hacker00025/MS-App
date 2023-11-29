// ...

// Replace YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_TENANT_ID, and YOUR_REDIRECT_URI with your actual values.
const clientId = 'e0d2bd38-3bfe-4214-a9db-96ad5dcc8469';
const clientSecret = '43a0006a-aad4-4844-9199-7b96e63cc4a4';
const tenantId = '78b175d5-b2cd-4f81-b100-d306709e21c3';
const redirectUri = 'http://localhost';
const graphScopes = ['user.read']; // Add necessary scopes

const msalConfig = {
    auth: {
        clientId: clientId,
        clientSecret: clientSecret,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        redirectUri: redirectUri,
    },
};

// ...
