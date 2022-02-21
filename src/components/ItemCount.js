import React, { useState} from "react";


function ItemCount ({stock, initial, onAdd}) {
    const [cont , setCont] = useState(initial);
    function sumItem () {
        if(cont < stock ){
        setCont(cont + 1);
        }
    };

    function resItem(){
        if (cont > 1){
        setCont(cont - 1);
        }
    };
    function addCart(){
        onAdd(cont);
    }


    return (
        <div>
            <button onClick={sumItem}>+ </button>
            <h5>{cont}</h5>
            <button onClick={resItem}> - </button>
            <br/>
            <button onClick={addCart}>Agregar al carrito</button>
        </div>
        )
    
}

export default  ItemCount;