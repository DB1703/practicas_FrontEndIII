import { useMemo, useState } from "react";
import styles from '../components/ejercicio1.module.css'
function Ejercicio1() {
    /* ESTO IRIA SOLO EN EL APP */
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [number3, setNumber3] = useState(0)

    /* EJERCICIO 2 */
    const suma = useMemo(()=>{
        return parseInt(number1) + parseInt(number2)
    },[number1, number2])

    /* No se como lograr que no se vuelva a renderizar el memo */
    
    /* console.log("render"); */
    
    return(
        <>
            <div className={styles.father}>
            <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
            <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />

            <p>La suma es: {suma}</p>
            </div>
            <input className={styles.third} type="number" value={number3} onChange={(e) => setNumber3(e.target.value)} />
        </>
    )
}

export default Ejercicio1;