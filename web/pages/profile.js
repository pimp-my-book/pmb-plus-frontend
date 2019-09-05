import WithAuth from '../lib/WithAuth'

const profile = () => {
    return (
        <div>
            Your profile
        </div>
    )
}

export default WithAuth(profile)