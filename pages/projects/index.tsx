import fs from 'fs';
import path from 'path';
import type {Project} from '@components/ProjectsList/Project';
import {getProjectsLayout} from '@components/ProjectsLayout';
import { ProjectsList } from '@components/ProjectsList';

type ProjectsProps = {
    projects: Project[],
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section>
            <h2>Projects</h2>
            <ProjectsList projects={projects} />
        </section>
    );
}


const projectsPath = 'src/components/Projects';
const projectsDirectory = path.join(process.cwd(), 'src/components/Projects');

export async function getStaticProps() {
    const projectsFolders = fs.readdirSync(projectsDirectory);

    const projects = projectsFolders.map(key => ({
        title: require(`@components/Projects/${key}`).title,
        key
    }))
  
    return {
        props: {
            projects,
        },
    }
}


Projects.getLayout = getProjectsLayout;
