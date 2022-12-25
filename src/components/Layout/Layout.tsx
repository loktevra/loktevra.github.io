import type { ReactElement } from 'react'
import Head from 'next/head'
import {Navbar} from '@components/Navbar'
import {Footer} from '@components/Footer'
import styles from 'styles/Layout.module.css';

type LayoutProps = {
    children: ReactElement
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Roman Loktev — software engineer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.title}>Roman Loktev — software engineer</h1>
            <hr />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>