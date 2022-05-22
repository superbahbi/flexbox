import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flexbox | flex-direction</title>
        <meta name="keywords" content="flexbox" />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.title}>flex-direction</h1>

        <div className={styles.row}>
          <div className={styles.column}>
            <div className={`${styles.container} ${styles.flexdirectionR}`}>
              <div className={`${styles.box} ${styles.boxRed}`}></div>
              <div className={`${styles.box} ${styles.boxBlue}`}></div>
              <div className={`${styles.box} ${styles.boxGreen}`}></div>
            </div>
          </div>
          <div className={`${styles.rightContainer} ${styles.column}`}>
            flex-direction: row;
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={`${styles.container} ${styles.flexdirectionRr}`}>
              <div className={`${styles.box} ${styles.boxRed}`}></div>
              <div className={`${styles.box} ${styles.boxBlue}`}></div>
              <div className={`${styles.box} ${styles.boxGreen}`}></div>
            </div>
          </div>
          <div className={`${styles.rightContainer} ${styles.column}`}>
            flex-direction: row-reverse;
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={`${styles.container} ${styles.flexdirectionC}`}>
              <div className={`${styles.box} ${styles.boxRed}`}></div>
              <div className={`${styles.box} ${styles.boxBlue}`}></div>
              <div className={`${styles.box} ${styles.boxGreen}`}></div>
            </div>
          </div>
          <div className={`${styles.rightContainer} ${styles.column}`}>
            flex-direction: column;
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={`${styles.container} ${styles.flexdirectionCr}`}>
              <div className={`${styles.box} ${styles.boxRed}`}></div>
              <div className={`${styles.box} ${styles.boxBlue}`}></div>
              <div className={`${styles.box} ${styles.boxGreen}`}></div>
            </div>
          </div>
          <div className={`${styles.rightContainer} ${styles.column}`}>
            flex-direction: column-reverse;
          </div>
        </div>
        <Link href="/project"><a className={styles.btn}>Next</a></Link>
      </div>
    </>
  )
}
