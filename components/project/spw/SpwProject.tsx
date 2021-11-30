import {IProject} from '../../../types/project';
import Svg from './assets/spw-logo.svg';
import Project from '../Project';

type Props = {
    project: IProject,
    mode?: 'page' | 'inline'
};

export default function SpwProject({project, mode = 'inline'}: Props) {
    return (
        <Project project={project} mode={mode}>
            <Svg role="img"/>
        </Project>
    )
}
