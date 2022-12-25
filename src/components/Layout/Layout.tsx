import type { ReactElement } from 'react'
import {Navbar} from '@components/Navbar'
import {Footer} from '@components/Footer'

type LayoutProps = {
    children: ReactElement
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}