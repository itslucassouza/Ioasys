import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/renderWithTheme'
import { CardComponent, ItemProps } from '.'

const onClick = jest.fn()

const props: ItemProps = {
  item: {
    imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg',
    title: 'A veniam sint',
    authors: ['Gúbio Moreira'],
    pageCount: '1538',
    publisher: 'Nogueira - Barros',
    published: '2010',
    id: '1'
  },
  onClick
}

describe('<CardComponent />', () => {
  it('should render the heading', async () => {
    renderWithTheme(<CardComponent item={props.item} onClick={props.onClick} />)

    expect(
      screen.getByRole('img', { name: 'capa do livro A veniam sint' })
    ).toHaveProperty('src', 'https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg')

    expect(
      screen.getByRole('heading', { name: 'A veniam sint' })
    ).toBeInTheDocument()

    expect(screen.getByText('Gúbio Moreira')).toBeInTheDocument()

    expect(screen.getByText('1538 Paginas')).toBeInTheDocument()

    expect(screen.getByText('Editora Nogueira - Barros')).toBeInTheDocument()

    expect(screen.getByText('Publicado em 2010')).toBeInTheDocument()

    const buttonCard = screen.getByRole('article')

    userEvent.click(buttonCard)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
