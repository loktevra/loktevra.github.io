import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import Head from 'next/head'

type ProjectsProps = {
    projects: {}[],
}


export default function Projects({ projects }: ProjectsProps) {
    const router = useRouter()
    const { key } = router.query

    const Component = require(`@components/Projects/${key}`).Component;

    return <Component />;
}

Projects.getLayout = function(Page: ReactElement) {
    return (
        <>
            <Head>
                <title>PRJ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {Page}
        </>
    )
}


const projectsDirectory = path.join(process.cwd(), 'src/components/Projects');

export async function getStaticPaths() {
    const projectsFolders = fs.readdirSync(projectsDirectory);

    const projects = projectsFolders.map(key => ({
        title: require(`@components/Projects/${key}`).title,
        key
    }))
  
    return {
        paths: projectsFolders.map(key => ({
            params: { key }
        })),
        fallback: false,
      }
}

export async function getStaticProps() {
    return {
        props: {}
    };
}

