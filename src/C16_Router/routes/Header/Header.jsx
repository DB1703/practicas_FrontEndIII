import { Routes, Route, Link } from "react-router-dom";
import styles from '/Users/Franco/Desktop/DH/Front III/practicas_Front3_DB/src/C16_Router/routes/Header/header.module.css'

function Header() {
    return(
        <>
            <nav className={styles.father}>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/shorts'}>Short</Link>
                <Link to={'/suscripciones'}>Suscripciones</Link>
                <Link to={'/explorar'}>Explorar</Link>
            </nav>
        </>
    )
}

export default Header;