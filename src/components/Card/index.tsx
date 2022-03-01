import * as S from './styles'
import { Book } from 'interfaces/global'

export interface ItemProps {
  onClick: () => void
  item: Book
}

export const CardComponent = ({ item, onClick }: ItemProps) => {
  return (
    <>
      <S.Card onClick={onClick}>
        <S.Book
          src={item.imageUrl || '/img/fallback-image.png'}
          alt={`capa do livro ${item.title}`}
        />
        <S.Infos>
          <h1>{item.title}</h1>
          <p className="subtitle">{item.authors[0]}</p>
          <S.Details>
            <p>{item.pageCount} Paginas</p>
            <p>Editora {item.publisher}</p>
            <p>Publicado em {item.published}</p>
          </S.Details>
        </S.Infos>
      </S.Card>
    </>
  )
}
