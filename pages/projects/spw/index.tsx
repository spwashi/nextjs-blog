import Main from '../../../components/layout/Main'
import Layout from '../../../components/layout/Layout'
import Head from 'next/head'
import {IProject} from '../../../types/project';
import {getProjectByKey} from '../../../lib/api/projects';
import SpwProject from '../../../components/project/spw/SpwProject';
import Header from '../../../components/layout/Header';

type Props = { project: IProject }

function Index({project}: Props) {
    return (
        <>
            <Layout>
                <Head><title>Spw</title></Head>
                <Main>
                    <Header/>
                    <div className="project-container">
                        <SpwProject project={project} mode="page"/>
                    </div>
                </Main>
            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    return {props: {project: getProjectByKey('spw')}}
}
