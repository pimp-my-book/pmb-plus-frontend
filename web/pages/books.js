import MyBooks from '../components/book/MyBooks'
import Cookie from 'js-cookie'

const Books = () => {
    const hasCookie = Cookie.get('token')

    if (!hasCookie) {
        return (
            <div>
                You need to be logged in
            </div>

        )
    } else {
        return (
            <>
                <MyBooks />
            </>
        )
    }

}

export default Books