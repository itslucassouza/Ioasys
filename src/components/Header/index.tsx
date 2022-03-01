import { useUser } from 'contexts/User'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

const Header = () => {
  const { user } = useUser()
  const { push } = useRouter()
  const handleLoggout = () => {
    localStorage.clear()
    push('/login')
  }
  return (
    <S.Header>
      <div>
        <S.Logo
          src="/img/logo-black.svg"
          alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
        <p>Books</p>
      </div>

      <S.UserName>
        <p>
          Bem vindo,<span> {user.name}</span>
        </p>
        <S.Logout
          src="/img/LogOut.svg"
          alt="Icone de logout"
          onClick={handleLoggout}
        />
      </S.UserName>
    </S.Header>
  )
}

export default Header
