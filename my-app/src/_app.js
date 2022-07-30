import '../styles/globals.css'
import { Navbar } from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-lato bg-light-1 min-h-screen flex flex-col">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
