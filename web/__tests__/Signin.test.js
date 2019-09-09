import { render, fireEvent } from '@testing-library/react'
import Signin from '../components/auth/Signin'

describe('<Signin/>', () => {

    const handleSubmit = jest.fn()
    it('Logs the user in', () => {
        const { getByText, findByText } = render(
            <Signin />
        )


    })

    it('Sends error message when not logged in', () => {

    })
})