const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')
require('dotenv').config()
const withTM = require("next-transpile-modules");
const withCSS = require("@zeit/next-css");
const compose = require('next-compose')



const isDev = phase = process.env.NODE_ENV === 'development' && process.env.NODE_ENV !== 'production'

//get the prod stage
const isProd = phase = process.env.NODE_ENV !== 'development' && process.env.NODE_ENV === 'production'

const isStaging = process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'production'

console.log(`isDev:${isDev} isProd:${isProd} isStaging:${isStaging}`)


module.exports = withCSS(
    withTM({
        transpileModules: ["umqombothi-component-library"],
        target: 'serverless',
        assetPrefix: 'https://s3.amazonaws.com/assets.pmbplus2',
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