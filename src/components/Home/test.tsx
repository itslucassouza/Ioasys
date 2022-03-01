import { render, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/renderWithTheme'
import Home from '.'
import nock from 'nock'
import { API_URL } from 'constants/global'
import { data } from './mock'

jest.mock('next/dist/client/router', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}))

nock(API_URL)
  .persist()
  .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
  .get('/books/?page=1&amount=12')
  .reply(200, data)

describe('<Home />', () => {
  it('should render the books list', async () => {
    const { getByText } = renderWithTheme(<Home />)

    await waitFor(() => {
      expect(getByText('A veniam sint')).toBeInTheDocument()
      expect(getByText('Accusantium nobis')).toBeInTheDocument()
      expect(getByText('Accusantium nobis')).toBeInTheDocument()
    })
  })
})
