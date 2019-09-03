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
        serverRuntimeConfig: {
            localEndpoint: process.env.local
        },
        env: {
            Cognito: (() => {
                if (isDev) return {
                    cognito: {
                        REGION: process.env.REACT_APP_REGION,
                        USER_POOL_ID: process.env.REACT_APP_UserPoolID_Dev,
                        APP_CLIENT_ID: process.env.REACT_APP_UserPoolClientID_Dev,
                        IDENTITY_POOL_ID: process.env.REACT_APP_IdentityPoolId_Dev,

                    }
                }
                if (isProd) {
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

    }),
);







/*
const cssConfig = {}
const tmConfig = { transpileModules: ["umqombothi-component-library"] }
module.exports = compose([
    [withCSS, cssConfig],
    [withTM, {
        transpileModules: ["umqombothi-component-library"]
    }], {
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
    }
])

module.exports = {
    serverRuntimeConfig: {
        localEndpoint: process.env.local
    }
}

*/

/*

module.exports = {
    serverRuntimeConfig: {
        localEndpoint: process.env.local
    }
}


module.exports = phase => {
    //get the dev stage
    const isDev = phase = process.env.NODE_ENV === 'development' && process.env.NODE_ENV !== 'production'

    //get the prod stage
    const isProd = phase = process.env.NODE_ENV !== 'development' && process.env.NODE_ENV === 'production'

    const isStaging = process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'production'

    console.log(`isDev:${isDev} isProd:${isProd} isStaging:${isStaging}`)

    //make an env object to return the right URL based on the stage
    const env = {
        API_ENDPOINTS: (() => {
            if (isDev) return 'http://localhost:4000/graphql'
            if (isProd) {
                return 'https://2m3x5565db.execute-api.us-east-1.amazonaws.com/dev/graphql'
            }
            if (isStaging) return 'http://localhost:4000/graphql'
        })
    }

    //return an env object for the config
    return {
        env
    }

}*/