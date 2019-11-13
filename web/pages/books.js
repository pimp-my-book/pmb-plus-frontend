import MyBooks from '../components/book/MyBooks'
import Cookie from 'js-cookie'

const Books = () => {
    const hasCookie = Cookie.get('token')

    if (!hasCookie) {
        return (
            <div>
                <MyBooks />
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