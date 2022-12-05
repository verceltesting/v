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

          <a href="https://n3wj.com/%e0%a4%8a%e0%a4%b0%e0%a5%8d%e0%a4%9c%e0%a4%be-%e0%a4%af%e0%a5%81%e0%a4%a6%e0%a5%8d%e0%a4%a7-%e0%a4%95%e0%a5%80-%e0%a4%a4%e0%a5%88%e0%a4%af%e0%a4%be%e0%a4%b0%e0%a5%80-%e0%a4%95%e0%a4%b0%e0%a4%a8/" className={styles.card}>
            <h2>अपनी सारी ऊर्जा युद्ध की तैयारी करने में लगा दें
 &rarr;</h2>
            <p>अपनी सारी ऊर्जा युद्ध की तैयारी करने में लगा दें
</p>
          </a>

          <a
            href="https://n3wj.com/9-%e0%a4%ad%e0%a4%be%e0%a4%b0%e0%a4%a4%e0%a5%80%e0%a4%af%e0%a5%8b%e0%a4%82-%e0%a4%95%e0%a5%80-%e0%a4%ad%e0%a5%80%e0%a4%b7%e0%a4%a3-%e0%a4%86%e0%a4%97-%e0%a4%b8%e0%a5%87-%e0%a4%ae%e0%a4%be%e0%a4%b2/"
            className={styles.card}
          >
            <h2>9 भारतीयों की भीषण आग से मालदीव में मौत
 &rarr;</h2>
            <p>9 भारतीयों की भीषण आग से मालदीव में मौत
</p>
          </a>

          <a
            href="https://n3wj.com/%e0%a4%a4%e0%a5%81%e0%a4%b0%e0%a5%8d%e0%a4%95%e0%a5%80-%e0%a4%ac%e0%a5%89%e0%a4%ae-%e0%a4%ac%e0%a5%8d%e0%a4%b2%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%9f/"
            className={styles.card}
          >
            <h2>इस्लामिक देश में फिर से बॉम ब्लास्ट – तुर्की बॉम ब्लास्ट
 &rarr;</h2>
            <p>
              इस्लामिक देश में फिर से बॉम ब्लास्ट – तुर्की बॉम ब्लास्ट
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://n3wj.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by N3WJ.COM
          
            
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
