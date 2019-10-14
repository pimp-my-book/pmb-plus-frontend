const dev = {
    s3: {
        REGION: process.env.REGION,
        BUCKET: process.env.s3Bucket_dev
    },
    cognito: {
        REGION: process.env.REGION,
        USER_POOL_ID: process.env.UserPoolID_Dev,
        APP_CLIENT_ID: process.env.UserPoolClientID_Dev,
        IDENTITY_POOL_ID: process.env.IdentityPoolId_Dev
    }
}

const prod = {
    s3: {
        REGION: process.env.REACT_APP_REGION,
        BUCKET: process.env.REACT_APP_S3_BCKT_PROD,
        SIZE: process.env.REACT_APP_S3_FILE_SIZE
    },
    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_USRPL_ID_PROD,
        APP_CLIENT_ID: process.env.REACT_APP_USRPL_CLNTID_PROD,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDPL_ID_PROD
    }
}

const config = process.env.REACT_APP_STAGE === "prod"
    ? prod
    : dev;

export default {
    ...config
};