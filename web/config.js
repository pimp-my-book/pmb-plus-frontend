//require('dotenv').config()

const dev = {

    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_UserPoolID_Dev,
        APP_CLIENT_ID: process.env.REACT_APP_UserPoolClientID_Dev,
        IDENTITY_POOL_ID: process.env.REACT_APP_IdentityPoolId_Dev,

    }
};

const prod = {

    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_UserPoolID_PROD,
        APP_CLIENT_ID: process.env.REACT_APP_UserPoolClientID_PROD,
        IDENTITY_POOL_ID: process.env.REACT_APP_IdentityPoolId_PROD,
    }
};

const config = process.env.NODE_ENV === 'prod'
    ? prod
    : dev;


export default {
    ...config
};