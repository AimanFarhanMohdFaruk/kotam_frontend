import Head from 'next/head'
import {useQuery, gql } from "@apollo/client"
import SideBar from '../components/Sidebar/Sidebar'
import styles from "../styles/auth.module.css"


export default function SignIn() {

    return (
      <>
        <Head>
          <title>Kotam App</title>
          <meta name="description" content="Sign in page" />
        </Head>

          <div className={styles.mainContainer}>
            <SideBar/>
            <p> Hi </p>
          </div>
      </>
    )
  }