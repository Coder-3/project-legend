import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Legend</title>
        <meta name="description" content="Create and play RPG scenarios and campaigns" />
      </Head>

      <main className={styles.main}>
      </main>
    </div>
  )
}

export default Home
