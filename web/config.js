
const dev = {

    cognito: {
        USERNAME: process.env.GUEST_USERNAME,
        PASSWORD: process.env.GUEST_PASSWORD,
        USER_POOL_ID: process.env.UserPoolID_Dev,
        APP_CLIENT_ID: process.env.UserPoolClientID_Dev,
        IDENTITY_POOL_ID: process.env.IdentityPoolId_Dev

    }
};

const prod = {

    cognito: {
        USERNAME: process.env.PROD_GUEST_USERNAME,
        PASSWORD: process.env.PROD_GUEST_PASSW0RD,
        USER_POOL_ID: process.env.UserPoolID_PROD,
        APP_CLIENT_ID: process.env.UserPoolClientID_PROD,
        IDENTITY_POOL_ID: process.env.IdentityPoolId_PROD,
    }
};

const config = process.env.env_stage === 'development'
    ? prod
    : dev;


export default {
    ...config
};