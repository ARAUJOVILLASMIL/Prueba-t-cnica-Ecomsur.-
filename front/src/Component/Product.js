import React, { useEffect, useState } from "react";
import "../App.css";
import { useContext } from "react";
import { ProductContext } from "../context/DataContext";

export const Product=({name,image,price,countInStock, quantityInitial,textButton}) => {
 const [url, seturl] = useState([""]);
 const {hide} = useContext(ProductContext)
 const [quantity, setQuantity] = useState(quantityInitial);
 const {productAdded, setProductAdded} = useContext (ProductContext)
 

 useEffect(() => {
    const getimg = () => {
      fetch( `http://localhost:5000${image}`)
        .then((res) => seturl(res.url));
        
       //console.log(countInStock) 
    };
    getimg();
  }, []);

  const addProduct = (product) => {
    setProductAdded([...productAdded, product])
    console.log("holaaa")
  }
  
    const classNameDisabled = countInStock === 0 ? "disabledButton"  : "enabled"
return(
 <article className="container"> 
    <h2 className="title">{name} </h2>
    <img className="imagen" src={url} alt={name}/>
    <p className="descripcion">${price}</p>
    <p>{quantityInitial} </p>
   
     <button onClick=  {() => addProduct ({name,image,price,countInStock})} className={classNameDisabled}>{textButton}</button>

 </article>

)
}