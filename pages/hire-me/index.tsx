import Main from '../../components/layout/Main'
import Layout from '../../components/layout/Layout'
import Head from 'next/head'
import Header from '../../components/layout/Header';
import {Spw} from '../../components/spw/spw';
import Image from 'next/image'

type Props = {}

const Index = ({}: Props) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Hire Me!</title>
                </Head>
                <Main>
                    <Header/>
                    <article>
                        <h1>I'm looking for a job</h1>
                        <p>Something in the space of web application development.</p>
                        <p>I have 8 years of development experience, and know a few different languages.</p>
                        <p>Check out <a href="https://resume.spwashi.com/resume">my resume.</a></p>
                    </article>
                    <article>
                        <h2>Until I get hired</h2>
                        <h3>I'll polish the projects I'm most proud of</h3>
                        <ul>
                            <li><a href="https://github.com/spwashi/spw-js">Spw</a></li>
                            <li><a href="https://github.com/spwashi/react-d3">React + D3</a></li>
                        </ul>
                        <h3>I'll refresh myself on the ecosystem</h3>
                        <ul>
                            <li>
                                <p>A <code>Hello World</code> in each major web application framework</p>
                                <ul>
                                    <li>
                                        <p>JavaScript</p>
                                        <ul>
                                            <li><a href="https://github.com/spwashi/hello-angular">Angular</a></li>
                                            <li><a href="https://github.com/spwashi/hello-vue">Vue JS</a></li>
                                            <li><a href="https://github.com/spwashi/hello-next">Next JS</a></li>
                                            <li>React JS</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h3>I'll continue working with my community</h3>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/jordan-norwood-a971b8186/">My mentee</a></li>
                            <li><a href="https://manifolddocuseries.com/">My clients</a></li>
                        </ul>
                    </article>
                </Main>
            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    return {
        props: {},
    }
}
