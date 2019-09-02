const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')
require('dotenv').config()
const withTM = require("next-transpile-modules");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
    withTM({
        transpileModules: ["umqombothi-component-library"]
    })
);

module.exports = {
    serverRuntimeConfig: {
        localEndpoint: process.env.local
    }
}

module
/*
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