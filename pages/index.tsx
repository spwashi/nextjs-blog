import Main from '../components/layout/Main'
import PostList from '../components/post/list/PostList'
import Layout from '../components/layout/Layout'
import {getAllPosts} from '../lib/api/posts'
import Head from 'next/head'
import Post from '../types/post'
import SpwProject from '../components/project/spw/SpwProject';
import {getAllProjects} from '../lib/api/projects';
import {IProject} from '../types/project';
import D3Project from '../components/project/d3/D3';
import Header from '../components/layout/Header';
import styles from './_styles/index.module.scss';
import {Hello} from '../components/decorations/hello/Hello';
import {Spw} from '../components/spw/spw';

type Props = {
    allPosts: Post[],
    allProjects: { [k: string]: IProject }
}

const Index = ({allPosts, allProjects}: Props) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Spwashi</title>
                </Head>
                <Main className={styles.indexPage}>
                    <Header/>
                    <section id="hero" className={styles.hero}>
                        <Hello/>
                    </section>
                    <h1>My name is <Spw full label="Samwashington"/></h1>
                    <h2>I've been a <Spw full label="developer"/> since <Spw full label="2013"/></h2>
                    <div id="work-container" className={styles.workContainer}>
                        <details id="showcased-projects" open>
                            <summary><h3>Showcased Projects</h3></summary>
                            <ul className={styles.projectList}>
                                <li aria-label="A programming language called Spw">
                                    <SpwProject project={allProjects.spw}/>
                                </li>
                                <li aria-label="A graphing library for D3">
                                    <D3Project project={allProjects.d3}/>
                                </li>
                            </ul>
                        </details>
                        <details id="featured-posts" open>
                            <summary><h3>Blog Posts</h3></summary>
                            <PostList posts={allPosts}/>
                        </details>
                    </div>
                </Main>
            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    const allProjects = getAllProjects();
    const allPosts    = getAllPosts([
                                        'title',
                                        'date',
                                        'slug',
                                        'featured',
                                        'coverImage',
                                        'excerpt',
                                    ])
    return {
        props: {allPosts, allProjects},
    }
}