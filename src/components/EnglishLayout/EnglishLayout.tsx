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
                        <li><Link href='/english/noun'>Noun</Link></li>
                        <li><Link href='/english/numbers'>Numbers</Link></li>
                        <li><Link href='/english/pronoun'>Pronoun</Link></li>
                        <li><Link href='/english/verb'>Verb</Link></li>
                        <li><Link href='/english/adverb'>Adverb</Link></li>
                        <li><Link href='/english/adjective'>Adjective</Link></li>
                        <li><Link href='/english/preposition'>Preposition</Link></li>
                        <li><Link href='/english/conjuctions'>Conjunctions</Link></li>
                        <li><Link href='/english/interjections'>Interjections</Link></li>
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