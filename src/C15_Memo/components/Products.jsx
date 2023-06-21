import { useMemo } from "react"
import products from '../products.json'

function Products() {
   const productsPrice5O = useMemo(() =>{
    /* Creo un array nuevo (a partir de uno anterior) en base a un filtro determinado */
    return products.filter((product) => product.precio >= 50)
   }, [])

    return(
        <>
            <div style={{backgroundColor:'white'}}>
                {/* A partir de ese filtro de array, hago un array nuevo */}
                {productsPrice5O.map((product)=>{
                    return (
                        <div key={product.id}>
                          <p>{product.nombre}</p>
                          <p>{product.descripcion}</p>
                          <p>${product.precio}</p>
                        </div>
                      )
                })}
            </div>
        </>
    )
}

export default Products