import Main from '../../components/layout/Main'
import Layout from '../../components/layout/Layout'
import Head from 'next/head'
import Header from '../../components/layout/Header';

type Props = {}

const Index = ({}: Props) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>About Me</title>
                </Head>
                <Main>
                    <Header/>
                    <article>
                        <section>
                            Hi! My name is SamWashington.
                        </section>
                        <section>
                            <ul>I make websites (and have since 2013).</ul>
                            <ul>I like drawing (and do it whenever I can).</ul>
                            <ul>I have a good friend named Boof (she is a sweet baby).</ul>
                        </section>
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
