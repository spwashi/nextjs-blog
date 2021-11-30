import {IProject} from '../../types/project';
import styles from './project.module.scss'
import Link from 'next/link';

type Props = {
    project: IProject;
    children?: any;
    mode?: 'inline' | 'page'
};
const Project = ({children, project, mode = 'inline'}: Props) => {
    if (!project) return null;
    return (
        <div className={styles.projectInner + ' ' + mode}>
            <Link href={'/projects/' + project?.name}>
                <a className={styles.imageTile}>
                    <div className={styles.imageWrapper}>
                        {children}
                    </div>
                </a>
            </Link>
            <div className="content">
                <div className="project-links">
                    <a href={project?.demo_url}>Demo</a>
                    <a href={project?.repo_url}>Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Project;