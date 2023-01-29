import type { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Footer} from '@components/Footer'
import {Navbar} from '@components/Navbar'
import styles from './ProjectsLayout.module.css';

type LayoutProps = {
    children: ReactElement
}

export function ProjectsLayout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>English Grammar</title>
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

export const getProjectsLayout = (page: ReactElement) => <ProjectsLayout>{page}</ProjectsLayout>