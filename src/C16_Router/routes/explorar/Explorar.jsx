import { Route, Routes, Link } from "react-router-dom"
import Tendencias from "./hijos/Tendencias"
import Musica from "./hijos/Musica"
import Peliculas from "./hijos/Peliculas"
import '/Users/Franco/Desktop/DH/Front III/practicas_Front3_DB/src/C16_Router/routes/explorar/explorar.css'

function Explorar() {
    return (
        <>
            <h1>Explorar</h1>
            <nav className="">
                <Link to='tendencias'>Tendencias</Link>
                <Link to='musica'>Música</Link>
                <Link to='peliculas'>Peliculas</Link>
            </nav>
            <Routes>
                <Route path="tendencias" element={<Tendencias/>}/>
                <Route path="musica" element={<Musica/>}/>
                <Route path="peliculas" element={<Peliculas/>}/>
            </Routes>
        </>
    )
}

export default Explorar