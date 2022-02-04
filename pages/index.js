import _default from 'next/dist/client/router'
import Head from 'next/head'
import {useQuery, gql } from "@apollo/client"
import Center from '../components/Center/Center'

const GET_USERS = gql`
query Users {
  users {
    id
    name
  }
}`

export default function Home() {

  const {loading,error,data} = useQuery(GET_USERS)
  console.log(data)
  return (
    <>
      <Head>
        <title>Kotam App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center/>
    </>
  )
}
