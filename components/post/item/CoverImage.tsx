import Image from 'next/image';

type Props = {
    title: string
    src: string
    slug?: string
}

const CoverImage = ({title, src, slug}: Props) => {
    const image = src && <Image src={src} alt={`Cover Image for ${title}`} layout="fill"/>
    return (
        <div>
            {image}
        </div>
    )
}

export default CoverImage
