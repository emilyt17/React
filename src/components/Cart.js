import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Cart = () => {
    const { cart, clean, deleteItem, getCartTotalPrice } = useContext(CartContext);
    
    const finalizarCompra = () => {
        const newOrder = {
            date: new Date(),
            buyer: { email: "comprador@mail.com", name: "name", number: "232323" },
            items: cart,
            total: getCartTotalPrice(),
        };

        addDoc(collection(db, 'orders'), newOrder)
            .then((res) => {
                console.log(res.id)
                alert("orden completada, seguimiento", res.id)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                clean()
            }); 
    }

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
                    <button onClick={finalizarCompra}>Finalizar compra</button>                    
                   
                </>
                
            )}

            
             
        </>
       
    );
};

export default Cart;