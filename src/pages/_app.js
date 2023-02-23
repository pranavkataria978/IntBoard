import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { Navbar } from '@blueprintjs/core'

export default function App({ Component, pageProps }) {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
   
  
  </>

  
}
