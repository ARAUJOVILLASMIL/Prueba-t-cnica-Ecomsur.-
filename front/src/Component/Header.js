import { useContext, useState } from "react"
import { ProductContext } from "../context/DataContext"
export const Header = ({image}) => {
  const {hide, setHide} = useContext(ProductContext) 
  const handleHide = () => {
    setHide(!hide)
  } 

    return(
        <header className="header"> 
          <h1 className="shopping"> Shopping </h1>
          <button className={`car-button`} onClick={handleHide}> <img src= {image} alt="carrito-compra"/> </button>
        </header>
    )
}