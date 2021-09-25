import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import '../style/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
