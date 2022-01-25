import Link from 'next/link'
import Head from 'next/head'

export default function FirstMatch() {
    return (
        <>
        <Head>
            <title> Matches Overview </title>
        </Head>
        <div>
            <h1> Matches Overview </h1>
            <Link href="/" ><a> Return to home </a></Link>
        </div>
        </>
    )
};