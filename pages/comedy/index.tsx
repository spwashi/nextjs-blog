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
                    <title>Comedy</title>
                </Head>
                <Main>
                    <Header/>
                    <article>
                        <h1>I do Improv and Stand-up</h1>
                        <p>Since 2014, I've done improv and stand-up off and on.</p>
                        <p>Now I do it relatively regularly because I like the community.</p>
                        <p>The people I've met are pretty cool, and the environment is implicitly supportive.</p>
                        <p>"Being funny" is not something I really want to strive for outside of this context because it tends to skew people's expectations.</p>
                        <p>That's all I'll say about that for now.</p>
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
