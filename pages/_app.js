import '../styles/globals.css'
import Layout from '../components/layout';
import {AuthProvider} from "../lib/auth.js"
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  } from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const createApolloClient = () => {
    const link = new HttpLink({
        uri:"http://localhost:4000"
    })

    return new ApolloClient({
        link,
        cache: new InMemoryCache(),
    })
  }

  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
};

export default MyApp;
