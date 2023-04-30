import '@/components/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/MainLayout/MainLayout'
import { ThemeProvider } from '@mui/material'
import theme from '../../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
