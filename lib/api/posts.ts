import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() { return fs.readdirSync(postsDirectory) }

type PostBySlug = { [key: string]: string }
export function getPostBySlug(slug: string, fields: string[] = []): PostBySlug {
    const realSlug        = slug.replace(/\.md$/, '')
    const fullPath        = join(postsDirectory, `${realSlug}.md`)
    const fileContents    = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents);

    const items: PostBySlug = {}

    // sanitize
    fields.forEach((field) => {
        if (field === 'slug') items[field] = realSlug
        if (field === 'content') items[field] = content
        if (data[field]) items[field] = data[field]
    })

    return items
}

export function getAllPosts(fields: string[] = []) {
    // sort posts by date in descending order
    const dateDescending = (post1: any, post2: any) => (post1.date > post2.date ? -1 : 1);
    return getPostSlugs().map((slug) => getPostBySlug(slug, fields))
                         .sort(dateDescending)
}
