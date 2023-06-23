import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import '../Ejercicio1/post.css'


function Post() {
    const[post, setPost] = useState([])
    const params = useParams()
 

    async function handlePost() {
        const response = await(await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        ).json()
        setPost(response)
    } 


    useEffect(() => {
        handlePost()
    },[params])
    return(
        <>
            {post && (
                <div className="main">
                    <header>
                        <span>
                            {post.id}
                        </span>
                    </header>
                    <section>
                        <h2>
                            {post.title}
                        </h2>
                        <p>
                            {post.body}
                        </p>
                    </section>
                </div>
            )}

            <Link className="Link" to={"../"}>Atrás</Link>
        </>
    )
}

export default Post;