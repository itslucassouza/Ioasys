/* eslint-disable @next/next/no-img-element */
import { ModalContainer } from './styles'
import * as S from './styles'
import { ROUTES } from 'constants/routes'
import { api } from 'services/api'
import { useEffect, useState } from 'react'
import { BookDetails } from 'interfaces/global'
import { useClickOutside } from 'hooks/UseClickOutside'

interface CardPropsInterface {
  id: string
  handleCloseModal: () => void
}

export const Modal = ({ id, handleCloseModal }: CardPropsInterface) => {
  const [book, setBook] = useState<BookDetails>({
    title: '',
    imageUrl: '',
    publisher: '',
    pageCount: '',
    published: '',
    language: '',
    isbn10: '',
    isbn13: '',
    description: ''
  })

  useEffect(() => {
    api
      .get(ROUTES.BOOKSID.GET(id))
      .then((response) => setBook(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [id])

  const ref = useClickOutside(handleCloseModal)

  return (
    <ModalContainer>
      <div ref={ref}>
        <div className="button-content">
          <S.Logo
            src="/img/closeBtn.svg"
            alt="Botão de fechar o modal."
            onClick={handleCloseModal}
          />
        </div>
        <S.ModalContent>
          <S.Book
            src={book?.imageUrl || '/img/fallback-image.png'}
            alt="Icone de logout"
          />
          <S.BookValues>
            <S.Title>{book.title}</S.Title>
            <S.Subtitle>{book.publisher}</S.Subtitle>
            <S.BookInfos>
              <h1>Informações</h1>
              <S.BookContent>
                <S.Labels>
                  <p>Páginas</p>
                  <p>Editora</p>
                  <p>Publicação</p>
                  <p>Idioma</p>
                  <p>Título Original</p>
                  <p>ISBN-10</p>
                  <p>ISBN-13</p>
                </S.Labels>
                <S.Infos>
                  <p>{book.pageCount}</p>
                  <p>{book.publisher}</p>
                  <p>{book.published}</p>
                  <p>{book.language}</p>
                  <p>{book.title}</p>
                  <p>{book.isbn10}</p>
                  <p>{book.isbn13}</p>
                </S.Infos>
              </S.BookContent>
            </S.BookInfos>

            <S.Reviews>
              <S.ReviewsTitle>RESENHA DA EDITORA</S.ReviewsTitle>
              <S.ReviewsContent>
                <img src="/img/reviews.svg" /> {book.description}
              </S.ReviewsContent>
            </S.Reviews>
          </S.BookValues>
        </S.ModalContent>
      </div>
    </ModalContainer>
  )
}

export default Modal
