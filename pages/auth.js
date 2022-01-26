import Head from 'next/head'
import {useQuery, gql } from "@apollo/client"
import SideBar from '../components/Sidebar/Sidebar'
import styles from "../styles/auth.module.css"
import Auth from '../components/Auth/Auth'


export default function SignIn() {

    return (
      <>
        <Head>
          <title>Kotam App</title>
          <meta name="description" content="Sign in page" />
        </Head>
        <Auth/>
      </>
    )
  }