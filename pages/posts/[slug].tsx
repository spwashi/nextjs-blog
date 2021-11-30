import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Main from '../../components/layout/Main'
import PostBody from '../../components/post/item/body/PostBody'
import Header from '../../components/layout/Header'
import PostHeader from '../../components/post/item/PostHeader'
import Layout from '../../components/layout/Layout'
import {getAllPosts, getPostBySlug} from '../../lib/api/posts'
import PostTitle from '../../components/post/item/PostTitle'
import Head from 'next/head'
import {SITE_TITLE} from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import IPost from '../../types/post'

type Props = {
    post: IPost
    morePosts: IPost[]
    preview?: boolean
}

const Post = ({post, morePosts, preview}: Props) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>
    }
    return (
        <Layout preview={preview}>
            <Main>
                <Header/>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                     <>
                         <article className="mb-32">
                             <Head>
                                 <title>{post.title} | {SITE_TITLE}</title>
                                 <meta property="og:image" content={post.ogImage.url}/>
                             </Head>
                             <PostHeader
                                 title={post.title}
                                 coverImage={post.coverImage}
                                 date={post.date}
                                 author={post.author}
                             />
                             <PostBody content={post.content}/>
                         </article>
                     </>
                 )}
            </Main>
        </Layout>
    )
}

export default Post

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({params}: Params) {
    const post    = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths:    posts.map((posts) => {
            return {
                params: {
                    slug: posts.slug,
                },
            }
        }),
        fallback: false,
    }
}
