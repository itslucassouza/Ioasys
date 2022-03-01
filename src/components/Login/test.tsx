import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/renderWithTheme'
import Login from '.'
import userEvent from '@testing-library/user-event'

jest.mock('next/dist/client/router', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}))

describe('<Login />', () => {
  it('should render the heading', async () => {
    renderWithTheme(<Login />)

    const emailInput = screen.getByAltText('email')
    const passwordInput = screen.getByAltText('senha')

    userEvent.type(emailInput, 'email@.com')
    userEvent.type(passwordInput, '123')

    await waitFor(() => {
      expect(emailInput).toHaveValue('email@.com')
      expect(passwordInput).toHaveValue('123')
    })
  })
})
