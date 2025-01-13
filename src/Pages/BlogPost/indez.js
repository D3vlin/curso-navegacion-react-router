import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../../LocalData/blogdata'
import { useAuth } from '../../Components/Auth'

function BlogPost() {
    const navigate = useNavigate()
    const auth = useAuth()
    const { slug } = useParams()
    const blogpost = blogdata.find(post => post.slug === slug)
    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>

            {canDelete && (
                <button>Eliminar blogpost</button>
            )}
        </>
    )
}

export { BlogPost }