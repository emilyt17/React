import React, { useEffect, useState } from "react";

import { getProduct } from "../api/api";
import ItemList from "./ItemList";
import { useParams} from "react-router-dom";


function ItemListContainer () {
  const [products, setProducts] = useState([])
  const {categoryName}=useParams()


  useEffect(() =>{
    getProduct().then((products) =>{
      if(!categoryName){
        setProducts(products);
      }else{

      const categoryProduct = products.filter((p)=>{
        return p.category === categoryName;
      });
      setProducts(categoryProduct);
    }
    }).catch((error)=>{
      console.log(error);
  });

  },[categoryName]);

 
    return (
        <div>
          {products.length > 0 ? <ItemList products={products} /> : <p>Cargando. </p> }

        </div>
        )
    
}

export default  ItemListContainer ;