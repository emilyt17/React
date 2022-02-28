import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addCart = (quantity, item) => {
        if (repeatId(item.id)) {

            sumQuantity(quantity, item);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
       console.log(cart)
    };

    const repeatId = (id) => {
        const cartSome = cart.some((prod) => prod.id === id);
        return cartSome;
    };

    const sumQuantity = (quantity, item) => {
        const copia = [...cart];
        copia.forEach((producto) => {
            if (producto.id === item.id) {
                producto.quantity += quantity;
            }
        });
    };


    const clean = () => {
        setCart([]);
    };

 
    const deleteItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    };

    

    return (
        <CartContext.Provider
            value={{ cart, addCart, clean, deleteItem }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;