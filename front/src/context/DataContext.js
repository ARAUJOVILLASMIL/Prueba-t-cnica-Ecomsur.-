import { createContext, useState } from "react";

// en este archivo creare un contexto que nos permita compartir la data de los productos añadidos
 export const ProductContext = createContext()

export const ProductContextProvider = ({children}) => {
    const [productAdded, setProductAdded] = useState([])
    const [hide, setHide] = useState (true)

     return(

        <ProductContext.Provider value={{productAdded,setProductAdded,hide,setHide}}>{children}</ProductContext.Provider>
     )
}
