import { useState } from "react";


function Ejercicio2() {
    const [loading, setLoading] = useState(false)
    const [hechos, setHechos] = useState([])
    async function handleClick() {
        setLoading(true)
        const response = await((await fetch(`https://cat-fact.herokuapp.com/facts`)).json())
        setHechos(
            response.map((hecho) => ({id: hecho['_id'], text: hecho.text}))
        )
        setLoading(false)
    }
    return(
        <>
            <button onClick={handleClick}>Buscar datos</button>
            {loading ? <div>Cargando datos...</div> : false}
            <ul>
                {hechos.map((hecho) => (
                    <li key={hecho.id}>{hecho.text}</li>
                ))}
            </ul>
        </>
    )    
}

export default Ejercicio2;