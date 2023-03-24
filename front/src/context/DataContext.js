import { createContext, useState } from 'react'
export const ProductContext = createContext()
export const ProductContextProvider = ({ children }) => {
  const [productAdded, setProductAdded] = useState([])
  const [hide, setHide] = useState(true)

  return (
    <ProductContext.Provider value={{ productAdded, setProductAdded, hide, setHide }}>{children}</ProductContext.Provider>
  )
}
