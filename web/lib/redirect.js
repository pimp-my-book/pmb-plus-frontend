import Router from 'next/router'

export default (context, target) => {
    if (context.res) {
        context.res.writehead(303, { Location: target })
        context.res.end()
    } else {
        Router.replace(target)
    }
}