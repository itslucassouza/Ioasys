/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import GlobalStyles from 'styles/global'
import { UserProvider, useUser } from 'contexts/User'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

function App({ Component, pageProps }: AppProps) {
  const { user } = useUser()
  const { push } = useRouter()

  useEffect(() => {
    if (user.id) {
      push('/')
    }
  }, [push, user.id])

  return (
    <>
      <Head>
        <title>IOASYS - Challenge</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="https://camp.ioasys.com.br/wp-content/themes/camp/assets/images/general/favicon.png"
        />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project to the company challenge"
        />
      </Head>

      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </>
  )
}

export default App
