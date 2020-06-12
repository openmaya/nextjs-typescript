import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
	  <title>난생 처음입니다.</title>
      </Head>
      <h1>난생처음 첫번째 글</h1>
      <p>
       와 신난다!
      </p>
    </Layout>
  )
}

