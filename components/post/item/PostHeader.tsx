import DateFormatter from '../DateFormatter'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import Author from '../../../types/author'

type Props = {
    title: string
    coverImage: string
    date: string
    author: Author
}

const PostHeader = ({title, coverImage, date}: Props) => {
    return (
        <>
            <div style={{position:'relative', height: 200 + 'px'}}>
                <CoverImage title={title} src={coverImage}/>
            </div>
            <PostTitle>{title}</PostTitle>
            <div>
                <div>
                    <DateFormatter dateString={date}/>
                </div>
            </div>
        </>
    )
}

export default PostHeader
