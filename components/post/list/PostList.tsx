import PostPreview from '../item/preview/PostPreview';
import Post from '../../../types/post';
import styles from './list.module.scss';


type Props = {
    posts: Post[]
}

const PostList = ({posts}: Props) => {
    return (
        <div className="blog-posts-list-container">
            <div className={styles.postList}>
                {posts.map((post) => (
                    <PostPreview key={post.slug}
                                 title={post.title}
                                 coverImage={post.coverImage}
                                 date={post.date}
                                 slug={post.slug}
                                 excerpt={post.excerpt}/>
                ))}
            </div>
        </div>
    )
}

export default PostList
