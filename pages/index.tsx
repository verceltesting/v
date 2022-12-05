import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>N3wj.com</title>
        <meta name="description" content="N3WJ.com देश विदेश से जुड़ी सभी प्रमुख ख़बरों को हिन्दी भाषा में आप तक पहुँचाने का एक माध्यम है" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://n3wj.com">N3WJ.COM</a>
        </h1>

        <p className={styles.description}>
          N3WJ.com देश विदेश से जुड़ी सभी प्रमुख ख़बरों को हिन्दी भाषा में आप तक पहुँचाने का एक माध्यम है
        </p>

        <div className={styles.grid}>
          <a href="https://n3wj.com/%e0%a4%aa%e0%a5%8b%e0%a4%b2%e0%a5%88%e0%a4%82%e0%a4%a1-%e0%a4%aa%e0%a4%b0-%e0%a4%ae%e0%a4%bf%e0%a4%b8%e0%a4%be%e0%a4%87%e0%a4%b2-%e0%a4%b8%e0%a5%87-%e0%a4%b9%e0%a4%ae%e0%a4%b2%e0%a4%be-2-%e0%a4%95/" className={styles.card}>
            <h2>पोलैंड पर मिसाइल से हमला 2 की मौत
 &rarr;</h2>
            <p>पोलैंड पर मिसाइल से हमला 2 की मौत
</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
