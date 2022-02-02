import React, {  useState, useContext, createContext } from 'react'
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    HttpLink,
    gql,
    } from '@apollo/client'


const authContext = createContext();

export function AuthProvider({children}) {
    const auth = useProvideAuth()

    return(
        <authContext.Provider value={auth}>
            <ApolloProvider client={auth.createApolloClient()} >
                {children}
            </ApolloProvider>
        </authContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth(){
    const [authToken, setAuthToken] = useState(null);

    const isSignedIn = () => {
        if(authToken){
            return true
        } else {
            return false
        }
    }

    const getAuthHeaders = () => {
        if(!authToken) return null;

        return {
            authorization: `Bearer ${authToken}`,
        }
    }

    const createApolloClient = () => {
        const link = new HttpLink({
            uri:"http://localhost:4000",
            headers: getAuthHeaders(),
        })

        return new ApolloClient({
            link,
            cache: new InMemoryCache(),
        })
    }

    const signIn = async ({email,password}) => {
        const client = createApolloClient()
        const loginMutation = gql `
            mutation SignIn($email: String!, $password: String!) {
                    signIn(email: $email, password: $password) {
                        token
                        user{
                        id
                        name
                        }
                    }
                }
            `

        const result = await client.mutate({
            mutation: loginMutation,
            variables: {email, password},
        })

        console.log(result)

        if(result?.data?.signIn?.token){
            setAuthToken(result.data.signIn.token)
        }
    }

    const signOut = () => {
        setAuthToken(null)
    }

    const signUp = async (formData) => {
        const client = createApolloClient()
        const signUpMutation = gql `
            mutation SignUp($email: String!, $password: String!, $group: String, $username: String!, $firstName: String!, $lastName: String!) {
            signUp(email: $email, password: $password, group: $group, username: $username, firstName: $firstName, lastName: $lastName) {
                    user {
                    name
                    email
                    group {
                        groupName
                    }
                    }
                    token
                }
            }
            `;
        
        const {username, firstName, lastName, email , password, group} = formData

        const result = await client.mutate({
            mutation: signUpMutation,
            variables:{username, firstName, lastName, email, password, group}
        })

        console.log(result)

        if(result?.data?.signUp?.token){
            setAuthToken(result.data.signUp.token)
        }
    }


    return {
        setAuthToken,
        isSignedIn,
        signIn,
        signUp,
        signOut,
        createApolloClient,
    }
}