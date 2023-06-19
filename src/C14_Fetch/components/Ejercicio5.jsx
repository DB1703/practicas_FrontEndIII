import { useEffect, useState } from "react"

function Ejercicio5() {
    const[post, setPost] = useState()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const[error, setError] = useState('')
    const[loading, setLoading] = useState(false)

    async function handleFetch() {
        
        const response = await(
            await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: 'POST',
                body: JSON.stringify({
                title,
                body,
            }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            ).json()
            {title && body ? setPost(response) : undefined}
    }
        


        
    useEffect(()=>{
        handleFetch()
    },[])

    return(
        <>
        <form>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea value={body} cols="30" rows="10" onChange={e => setBody(e.target.value)}></textarea>
            <button onClick={handleFetch}>Guardar</button>
        </form>
        
        <ul>
            {post ? <li>{post}</li> : error}
        </ul>
        </>
    )
   
}

export default Ejercicio5



/* Falta COMPLETAR EL EJERCICIO  */