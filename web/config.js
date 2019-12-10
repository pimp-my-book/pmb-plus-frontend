
const dev = {

    cognito: {
        USERNAME: process.env.GUEST_USERNAME,
        PASSWORD: process.env.GUEST_PASSWORD

    }
};

const prod = {

    cognito: {
        USERNAME: process.env.PROD_GUEST_USERNAME,
        PASSWORD: process.env.PROD_GUEST_PASSW0RD
    }
};

const config = process.env.env_stage === 'development'
    ? prod
    : dev;


export default {
    ...config
};