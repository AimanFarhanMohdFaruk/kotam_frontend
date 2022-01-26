import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client"
import Layout from '../components/layout';

const client = new ApolloClient({
  uri:'http://localhost:4000/',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
  <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  )
}

export default MyApp
