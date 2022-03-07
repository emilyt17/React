import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, clean, deleteItem, getCartTotalPrice } = useContext(CartContext);

    
    

    return (

        <>
            {cart.length === 0 ? (
                <>
                    <h2>NO SE AGREGO NINGUN PRODUCTO Al CARRITO</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
                <>
                    {cart.map((producto) => (
                        <div key={producto.id}>
                            <h3>{producto.name}</h3>
                            <h3>{producto.price * producto.quantity}</h3>
                            <h3>{producto.quantity}</h3>
                            <button onClick={() => deleteItem(producto.id)}>
                                X
                            </button>
                            
                        </div>
                        
                    ))}
                    <div>
                        <h3 >Total Price= {getCartTotalPrice()}</h3>
                    </div>
                    <button onClick={clean}>Borrar Items</button>
                   
                </>
                
            )}

            
             
        </>
       
    );
};

export default Cart;