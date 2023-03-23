import React, { useContext, useEffect, useState } from "react";
import { Product } from "./Product";
import "../App.css";
import { ProductList } from "./ProductList";
import { ProductContext} from "../context/DataContext";
export const PageProduct = () => {
    const {hide} = useContext(ProductContext)
    const [db, setdb] = useState([]);


    useEffect(() => {
        const getdata = () => {
          fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((res) => setdb(res));
        };
        getdata();
      }, []);
     console.log(db)
    
      return (
        <>
       <section className="container-card" > 
        {
            db.map(product =>(
                <Product
                 name= {product.name}
                 image= {product.image}
                 countInStock= {product.countInStock}
                 price={product.price}
                 quantityInitial= ""
                 textButton= "Add item to cart"
                 
                 />
            ))
        } 
        </section>
        {hide? "" :<div className="productos-añadidos">
        <p>Productos Añadidos</p>
        <ProductList  />
    </div>}
   </>
      );
    };
