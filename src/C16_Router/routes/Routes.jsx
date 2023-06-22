import { Route, Routes} from "react-router-dom"
import Explorar from './C16_Router/routes/explorar/Explorar.jsx'
import Header from './C16_Router/routes/Header/Header'

function Routes() {
    /* esto iria en app */
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>}/>
        <Route path='/shorts' element={<h1>Shorts</h1>}/>
        <Route path='/suscripciones' element={<h1>Suscripciones</h1>}/>
        <Route path='/explorar/*' element={<Explorar/>}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>     
    </>
}