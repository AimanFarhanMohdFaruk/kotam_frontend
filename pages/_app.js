import '../styles/globals.css'
import Layout from '../components/layout';
import {AuthProvider} from "../lib/auth.js"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
};

export default MyApp;
