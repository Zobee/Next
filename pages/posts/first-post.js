import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function FirstPost() {
  return(
    <Layout>
    <Head>
      <title>First Post</title>
    </Head>
     <h1>First Post</h1>
     <Link href='/'>
       <a>Go Home</a>
     </Link>
    </Layout>
  )
}