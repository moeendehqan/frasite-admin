import '@/styles/globals.css'
import UserContextProvider from '@/context/userContextProvider'
import { ThemeProvider } from '@material-tailwind/react'

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider>
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
    </ThemeProvider>    
  )
}
