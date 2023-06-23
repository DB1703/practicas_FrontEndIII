/* Seria App.jsx */
import {Routes, Route} from 'react-router-dom'
import Ejercicio1 from './routes/Ejercicio1/Ejercicio1';
import Post from './routes/Ejercicio1/post';

function app() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Ejercicio1/>}></Route>
                <Route path='posts/:id' element={<Post/>}></Route>
                <Route path='*' element={<h1>404</h1>}></Route>
            </Routes>
        </>
    )
}

export default app;