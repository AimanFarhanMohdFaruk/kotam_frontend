import Link from 'next/link'
import Head from 'next/head'
import Layout from "../../components/layout"

export default function FirstMatch() {
    return (
        <Layout>
        <Head>
            <title> Matches Overview </title>
        </Head>
        <h1> Matches Overview </h1>
        <Link href="/" ><a> Return to home </a></Link>
        </Layout>
    )
}