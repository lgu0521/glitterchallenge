import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import GlobalStyle from '../styles/global-styles'
import "../axios.setting";
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </ThemeProvider >
  )
}

export default MyApp