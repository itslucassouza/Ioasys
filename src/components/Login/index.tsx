import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import * as S from './styles'

import { api, setToken } from 'services/api'
import { ROUTES } from 'constants/routes'

import { useUser } from 'contexts/User'

import { LOGIN_ERROR_MESSAGE } from 'constants/global'

const Login = () => {
  const { push } = useRouter()
  const { setUser } = useUser()

  const [error, setError] = useState(false)
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const btn = document.querySelector('#submit')

      btn.click()
    }
  })

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    try {
      const { data, headers } = await api.post(ROUTES.SIGN_IN.POST, {
        email: login.email,
        password: login.password
      })

      setToken({
        accessToken: headers.authorization,
        refreshToken: headers['refresh-token']
      })

      push('/')

      setUser({
        ...data
      })
    } catch (errors: any) {
      if (errors.response.data.errors.message === LOGIN_ERROR_MESSAGE) {
        setError(true)
      }
    }
  }

  return (
    <S.Container>
      <div>
        <S.Header>
          <S.Logo src="/img/logo.svg" alt="Logo ioasys" />
          <p>Books</p>
        </S.Header>

        <S.InputsContent>
          <label>Email</label>
          <input
            type="email"
            alt="email"
            autoComplete="none"
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </S.InputsContent>

        <S.InputsContentPassword>
          <div>
            <label>Senha</label>
            <input
              type="password"
              alt="senha"
              autoComplete="new-password"
              onChange={(e) =>
                setLogin((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <button type="submit" id="submit" onClick={(e) => handleSubmit(e)}>
            Entrar
          </button>
        </S.InputsContentPassword>
        {error && <S.Error>Email e/ou senha incorretos.</S.Error>}
      </div>
    </S.Container>
  )
}

export default Login
