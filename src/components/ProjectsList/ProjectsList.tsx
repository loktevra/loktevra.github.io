import type { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Footer} from '@components/Footer'
import {Navbar} from '@components/Navbar'
import styles from './ProjectsList.module.css';

type ProjectsListProps = {
    projects: {}[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
    return (
        <main>
            {projects.map(({ title, key }) => (
                <div>
                    <h2><a href={`/projects/${key}`}>{title}</a></h2>
                </div>
            ))}
        </main>
    )
}
