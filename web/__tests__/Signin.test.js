import { render, fireEvent, getByLabelText } from '@testing-library/react'
import Signin from '../components/auth/Signin'

describe('<Signin/>', () => {

    const handleSubmit = jest.fn()
    it.skip('Logs the user in', () => {
        const { getByText, findByText, getBy } = render(
            <Signin />
        )

        fireEvent.change(getByLabelText(/email address/i), { target: { value: 'vendor@example.com' } })
        fireEvent.change(getByLabelText(/password/i), { target: { value: 'rassword!' } })

        fireEvent.click(getByText(/login/i))
        expect(handleSubmit).toHaveBeenCalledTimes(1)
    })

    it.skip('Sends error message when not logged in', () => {
        const { getByText, findByText, getBy } = render(
            <Signin />
        )

        fireEvent.change(getByLabelText(/email address/i), { target: { value: 'vendor@example.com' } })
        fireEvent.change(getByLabelText(/password/i), { target: { value: 'rassword!' } })

        fireEvent.click(getByText(/login/i))

        expect(getByText(/user does not exist/))
    })
})