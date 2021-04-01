 
// top-level component. Keep state across pages
// Changes here require npm run dev again
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }