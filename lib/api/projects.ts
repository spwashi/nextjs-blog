import fs from 'fs'
import {join} from 'path'
import {IProject} from '../../types/project';
import * as process from 'process';

const projectsDirectory = join(process.cwd(), '_projects')

export function getProjectSlugs() { return fs.readdirSync(projectsDirectory) }
export function getProjectContents(project: string) {
    try {
        let string = fs.readFileSync(projectsDirectory + '/' + project + '/index.json', 'utf8');
        if (!string) return {};
        return JSON.parse(string);
    } catch (e) {
        return {};
    }
}

const projects = {
    spw: {
        name:  'spw',
        title: 'Spw',
    },
    d3:  {
        name:  'd3',
        title: 'D3',
    },
}

export function getProjectByKey(projectName: keyof typeof projects): IProject {
    return Object.assign(
        getProjectContents(projectName),
        {name: projectName},
    )
}

export function getAllProjects() {
    const slugs = getProjectSlugs();
    return Object.fromEntries(slugs.map(name => [name, Object.assign(getProjectContents(name), {name})]))
}
