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
                    <title>Updated Daily</title>
                </Head>
                <Main>
                    <Header/>
                    <article>
                        <h1>Something Every Day</h1>
                        <h2>I'll update this page regularly</h2>
                        <p>Daily practice is important!</p>
                        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '100%', height: '300px', position: 'relative'}}>
                            <figure>
                                <Image
                                    alt="This is a picture I took"
                                    src="https://static.spwashi.com/images/optimized/IMG_0626.jpg"
                                    width={400}
                                    height={266}
                                />
                                <figcaption>This is a picture I took with <Spw label="my camera"/></figcaption>
                            </figure>
                        </div>
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
