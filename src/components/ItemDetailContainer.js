import React, { useEffect, useState } from "react";

import { getProduct } from "../api/api";
import ItemDetail from "./ItemDetail";
import { useParams} from "react-router-dom";
import { getDoc , doc } from "firebase/firestore";
import { db } from "../firebase"


function ItemDetailContainer () {
  const [item, setItem] = useState([])
  const {idProducto} = useParams() ;

  useEffect(() =>{

    //getProduct().then((items) =>{
     //const producto = items.find((p) => p.id === parseInt(idProducto));
    //setItem(producto);
    //})
    const itemR = doc( db,"items", idProducto);
      getDoc(itemR).then((snapshot) =>{
        if(snapshot.exists()){
          setItem({id: snapshot.id, ...snapshot.data()})
        }


    })
    .catch((error) =>{
      console.log(error);
    })

  },[idProducto]);

    return (
      <div>
      <ItemDetail item={item} />
      </div>
        )
    
}

export default  ItemDetailContainer ;