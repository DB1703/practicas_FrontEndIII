import { useEffect, useState } from "react";
import '../Ejercicio1/ejercicio.css'
import { Link } from "react-router-dom";

function Ejercicio1() {
    const[posts, setPosts] = useState([])

    async function handlePost() {
        const response = await(await fetch(`https://jsonplaceholder.typicode.com/posts`)
        ).json()
        setPosts(response)
    }

    useEffect(() => {
        handlePost()
    },[])


    return (
        <>
            <section>
                <ul>
                    {posts.map((post)=>(
                     <li key={post.id}>
                        <span>{post.id}</span>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Link to={`posts/${post.id}`}>Más detalles</Link>
                    </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Ejercicio1;