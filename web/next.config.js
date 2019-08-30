const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')


module.exports = phase => {
    //get the dev stage
    const isDev = phase = PHASE_DEVELOPMENT_SERVER

    //get the prod stage
    const isProd = phase = PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

    //make an env object to return the right URL based on the stage
    const env = {
        API_ENDPOINTS: (() => {
            if (isDev) return 'http://localhost:4000/graphql'
            if (isProd) {
                return 'https://2m3x5565db.execute-api.us-east-1.amazonaws.com/dev/graphql'
            }
        })
    }

    //return an env object for the config
    return {
        env
    }

}