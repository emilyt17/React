import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import { getProduct } from "../api/api";
import ItemList from "./ItemList";

function ItemListContainer () {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    getProduct().then((products) =>{
      console.log(products);
      setProducts(products);
    }).catch((error)=>{
      console.log(error);
    });


  },[]);


  function addItem(cont){
    console.log(cont)

  }
    return (
        <div>
          {products.length > 0 ? <ItemList products={products} /> : <p>Cargando. </p> }
          <ItemCount stock ={5} initial={1} onAdd={addItem} />
        </div>
        )
    
}

export default  ItemListContainer ;