import type {Project} from './Project';

type ProjectsListProps = {
    projects: Project[]
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
