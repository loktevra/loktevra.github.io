import type { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Footer} from '@components/Footer'
import {Navbar} from '@components/Navbar'
import styles from './EnglishLayout.module.css';

type LayoutProps = {
    children: ReactElement
}

export function EnglishLayout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>English Grammar</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.title}>Roman Loktev — software engineer</h1>
            <hr />
            <Navbar />
            <div className={styles.container}>
                <nav>
                    <ul>
                        <li><Link href='/english'>Introduction</Link></li>
                        <li><Link href='/english/words'>Words</Link></li>
                    </ul>
                </nav>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export const getEnglishLayout = (page: ReactElement) => <EnglishLayout>{page}</EnglishLayout>