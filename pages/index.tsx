import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>반가워요 PPSU라고 합니다!</p>
        <p>
         요기는 샘플 웹사이트예요 - 여러분도 이렇게 사이트를 만들수 있어요! 
        </p>
      </section>
<h1 className="title">
	  한번볼래? <Link href="/posts/first-post"><a> 내가만든 첫번째 페이지!</a></Link>
        </h1>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>블로그 글 목록</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
	      <Link href="/posts/[id]" as={`/posts/${id}`}>
                 <a>{title}</a>
              </Link>
              <br />
	      <small className={utilStyles.lightText}>
              {date}
              </small>
            </li>
          ))}
        </ul>
      </section>


    </Layout>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

