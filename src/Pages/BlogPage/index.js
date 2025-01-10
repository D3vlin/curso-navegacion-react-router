import React from 'react'
import { BlogLink } from '../../Components/BlogLink'
import { blogdata } from '../../LocalData/blogdata'

function BlogPage() {
    return (
        <>
            <h1>BlogPage</h1>
            <ul>
                {blogdata.map(post => (
                    <BlogLink key={post.slug} post={post} />
                ))}
            </ul>
        </>
    )
}

export { BlogPage }