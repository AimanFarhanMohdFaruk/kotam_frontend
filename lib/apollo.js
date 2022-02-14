import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    } from '@apollo/client'
import { setContext } from "@apollo/client/link/context"

const URI = 'http://localhost:4000'

const httpLink = new HttpLink({
    uri: URI
});


const authLink = setContext((_, {headers}) => {
    const token =  localStorage.getItem('token');

    return {
        headers:{
            ...headers,
            authorization: token || "",
        }
    }
});


export const client =  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});