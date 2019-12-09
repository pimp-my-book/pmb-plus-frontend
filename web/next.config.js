require('dotenv').config()
const withTM = require("next-transpile-modules");
const withCSS = require("@zeit/next-css");


module.exports = withCSS(

    withTM({
        transpileModules: ["umqombothi-component-library", "react-input-switch"],
        target: 'serverless',
        cssLoaderOptions: {
            url: false
        },


        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            });

            return config;
        },

        env: {
            'REGION': process.env.REGION,
            'UserPoolID_Dev': process.env.UserPoolID_Dev,
            'UserPoolClientID_Dev': process.env.UserPoolClientID_Dev,
            'IdentityPoolId_Dev': process.env.IdentityPoolId_Dev,
            's3Bucket_dev': process.env.s3Bucket_dev,
            'serviceEndpoint_DEV': process.env.serviceEndpoint_DEV,
            'serviceEndpoint_PROD': process.env.serviceEndpoint_PROD,
            'UserPoolID_PROD': process.env.UserPoolID_PROD,
            'UserPoolClientID_PROD': process.env.UserPoolClientID_PROD,
            'IdentityPoolId_PROD': process.env.IdentityPoolId_PROD,
            's3Bucket_PROD': process.env.s3Bucket_PROD,
            'GUEST_USERNAME': process.env.GUEST_USERNAME,
            'GUEST_PASSWORD': process.env.GUEST_PASSWORD,
            'ENV_STAGE': process.env.ENV_STAGE

        }

    }),
);


/*
,

 publicRuntimeConfig: {

            [isDev]: {
                REGION: process.env.REACT_APP_REGION,
                USER_POOL_ID: process.env.REACT_APP_UserPoolID_Dev,
                APP_CLIENT_ID: process.env.REACT_APP_UserPoolClientID_Dev,
                IDENTITY_POOL_ID: process.env.REACT_APP_IdentityPoolId_Dev,
            },
            [isProd]: {
                REGION: process.env.REACT_APP_REGION,
                USER_POOL_ID: process.env.REACT_APP_UserPoolID_PROD,
                APP_CLIENT_ID: process.env.REACT_APP_UserPoolClientID_PROD,
                IDENTITY_POOL_ID: process.env.REACT_APP_IdentityPoolId_PROD,
            }
        }

        env: {
            Cognito: (() => {
                if (PHASE_DEVELOPMENT_SERVER) return {
                    cognito: {
                        REGION: process.env.REACT_APP_REGION,
                        USER_POOL_ID: process.env.REACT_APP_UserPoolID_Dev,
                        APP_CLIENT_ID: process.env.REACT_APP_UserPoolClientID_Dev,
                        IDENTITY_POOL_ID: process.env.REACT_APP_IdentityPoolId_Dev,

                    }
                }
                if (PHASE_PRODUCTION_BUILD) {
                    return {
                        cognito: {
                            REGION: process.env.REACT_APP_REGION,
                            USER_POOL_ID: process.env.REACT_APP_UserPoolID_PROD,
                            APP_CLIENT_ID: process.env.REACT_APP_UserPoolClientID_PROD,
                            IDENTITY_POOL_ID: process.env.REACT_APP_IdentityPoolId_PROD,
                        }
                    }
                }
            })
        }

        */
