import { useQuery } from '@apollo/react-hooks'
import { HELLO } from '../graphql/Queries'

function Home() {

    const { loading, error, data } = useQuery(HELLO)

    if (loading) return <p>...loading</p>
    if (error) return <p>Something went wrong</p>
    console.log(data)
    return (
        <>
            <div>PMB Plus Front-End! 🤩 </div>
            <p>{data.hello}</p>
        </>
    )
}

export default Home