import { CardComponent } from 'components/Card'
import Header from 'components/Header'
import Modal from 'components/Modal'
import { ROUTES } from 'constants/routes'
import { Book } from 'interfaces/global'
import { useCallback, useEffect, useState } from 'react'
import { api } from 'services/api'

import * as S from './styles'

interface CardProps {
  data: Array<Book>
  totalPages: number
}

const Home = () => {
  const [books, setBooks] = useState<CardProps>()
  const [page, setpage] = useState(1)
  const [handleModal, setHandleModal] = useState(false)
  const [itemId, setItemId] = useState('')

  useEffect(() => {
    api
      .get(ROUTES.BOOKS.GET(page))
      .then((response) => setBooks(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [page])

  const handleModalClick = useCallback((id: string) => {
    setHandleModal((prevState) => !prevState)
    setItemId(id)
  }, [])

  const handleCloseModal = () => {
    setHandleModal((prev) => !prev)
  }

  return (
    <>
      <S.Container>
        <Header />
        <S.CardContent>
          {books?.data?.map((item) => (
            <CardComponent
              onClick={() => handleModalClick(item.id)}
              key={item.id}
              item={item}
            />
          ))}
        </S.CardContent>
        <S.Pagination>
          {page > 1 && (
            <S.PrevBtn
              src="/img/prev.svg"
              alt="Icone de logout"
              onClick={() => setpage(page - 1)}
            />
          )}
          <p>Página {page} de 100</p>
          {books && page < books?.totalPages && (
            <S.PrevBtn
              src="/img/next.svg"
              alt="Icone de logout"
              onClick={() => setpage(page + 1)}
            />
          )}
        </S.Pagination>
      </S.Container>
      {handleModal && <Modal id={itemId} handleCloseModal={handleCloseModal} />}
    </>
  )
}

export default Home
