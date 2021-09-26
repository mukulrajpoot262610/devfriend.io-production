import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import '../style/global.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import store from '../store/store'
import FirebaseAuthState from '../config/FirebaseAuthState'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <FirebaseAuthState>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </FirebaseAuthState>
      </Provider>
    </>
  )
}

export default MyApp
