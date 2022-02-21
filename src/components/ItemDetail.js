import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import React, { useState} from "react";


export default function ItemDetail ({item}){
    const [conter , setConter] = useState();

    function addItem(newItem){
        console.log(newItem);
        setConter(newItem);
    
    }

    return (
        <div>
           <div key={item.id} className="row row-cols-1 row-cols-md-3 g-4 ">
                    <div className="col p-3 mb-5 mt-4">
                        <div className="card h-100">
                        <img src={item.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                 <h5 className="card-title">{item.name}</h5>
                                 <p className="card-text">{item.decription}</p>
                            </div>
                            <div className="card-footer">
                             <small className="text-muted">{item.price} </small>
                             {
                                 ! conter ?
                             <ItemCount stock ={5} initial={1} onAdd={addItem} /> :
                             <Link to ="/cart"> Ir al carrito</Link>
                             }
                             </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};