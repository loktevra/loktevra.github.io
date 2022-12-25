import Head from 'next/head'
import styles from 'styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Loktev R.A.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className={styles.title}>Loktev R.A.</h1>
            </main>

            <footer>
            </footer>
        </div>
    )
}