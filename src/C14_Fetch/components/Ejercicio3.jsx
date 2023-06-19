import { useEffect, useState } from "react";

function Ejercicio3() {
    const[text, setText] =  useState('')

    async function handleFetch() {
        const response = await(await fetch(`https://cat-fact.herokuapp.com/facts/random`)).json()
        setText(response.text)
    }
    useEffect(() => {
        handleFetch()
    }, [])
    return (
        <>
        <button onClick={handleFetch}>Siguiente facto</button>
        <p>{text}</p>
        </>
    )
}

export default Ejercicio3;