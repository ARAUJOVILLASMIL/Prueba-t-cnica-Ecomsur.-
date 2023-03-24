import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/DataContext'
import { Product } from './Product'

export const ProductList = () => {
  const { hide, productAdded } = useContext(ProductContext)
  const [arr, setArr] = useState([])

  useEffect(() => {
    const products = productAdded.map(item => { return { ...item, quantity: productAdded.filter(e => e.name === item.name).length } })
    const lista = Array.from(new Set(products.map(JSON.stringify)))
    setArr(Array.from(lista).map(JSON.parse))
  }, [productAdded])

  const classNameHide = hide ? 'hide' : 'show'

  return (

        <section className={classNameHide}>
         {arr.map(product => (
            <Product
            name= {product.name}
            image= {product.image}
            price= {product.price}
            quantityInitial= {product.quantity}
            countInStock= {product.countInStock}
            textButton = "+"
             />
         ))}
        </section>
  )
}
