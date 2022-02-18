import React, { useEffect, useState } from "react";

import { getProduct } from "../api/api";
import ItemDetail from "./ItemDetail";
import { useParams} from "react-router-dom";

function ItemDetailContainer () {
  const [item, setItem] = useState([])
  const {idProducto} = useParams() ;

  useEffect(() =>{

    getProduct().then((items) =>{
     const producto = items.find((p) => p.id === parseInt(idProducto));
      setItem(producto);
    })

  },[idProducto]);

    return (
      <div>
      <ItemDetail item={item} />
      </div>
        )
    
}

export default  ItemDetailContainer ;