import {IProject} from '../../../types/project';
import Svg from './assets/d3-logo.svg';
import Project from '../Project';

type Props = {
    project: IProject;
    mode?: 'inline' | 'page'
};

export default function D3Project({project, mode = 'inline'}: Props) {
    return (
        <Project project={project} mode={mode}>
            <Svg role="img"/>
        </Project>
    )
}
