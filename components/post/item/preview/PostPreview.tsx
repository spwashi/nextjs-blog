import DateFormatter from '../../DateFormatter'
import CoverImage from '../CoverImage'
import Link from 'next/link'
import style from './_styles/preview.module.scss'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    slug: string
    featured?: boolean
}

const PostPreview = ({
                         title,
                         coverImage,
                         date,
                         excerpt,
                         slug,
                     }: Props) => {
    return (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className={style.postPreviewLinkWrapper}>
                <div className={style.postPreview}>
                    <div className={style.tile}>
                        <div className={style.imageWrapper}>
                            <CoverImage slug={slug} title={title} src={coverImage}/>
                        </div>
                    </div>
                    <div className={style.title}>
                        {title}
                    </div>
                    <div className={style.body}>
                        <DateFormatter dateString={date}/>
                        <p>{excerpt}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default PostPreview
