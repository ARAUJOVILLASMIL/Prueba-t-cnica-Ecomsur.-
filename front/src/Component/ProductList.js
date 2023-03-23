import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/DataContext"
import { Product } from "./Product"
export const ProductList = () => {
    const {hide, productAdded} = useContext(ProductContext)
    console.log(productAdded)
  
//const lista = Array.from(new Set([ ...productAdded].map(JSON.stringify))) 
//const arr = Array.from(new Set(productAdded))

console.log("holaaa" )

const [arr, setArr] = useState ([])
//setArr(Array.from(lista).map(JSON.parse))


useEffect(() => {
    const products = productAdded.map(item => { return { ...item, quantity: productAdded.filter(e => e.name === item.name).length } })
    const lista = Array.from(new Set(products.map(JSON.stringify))) 
    setArr(Array.from(lista).map(JSON.parse))
  }, [productAdded]);

console.log(arr)

    const classNameHide = hide ? "hide" : "show"
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