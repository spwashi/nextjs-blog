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
                    <title>Art</title>
                </Head>
                <Main>
                    <Header/>
                    <article>
                        <h1>Art of the Day</h1>
                        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '100%'}}>
                            <img
                                alt="Kinda looks like a person carrying a dog"
                                src="https://static.spwashi.com/images/optimized/IMG_1641.jpg"
                                width={'100%'}
                            />
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
