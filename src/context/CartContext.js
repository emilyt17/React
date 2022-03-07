import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);



    const addCart = (quantity, item,) => {
        if (repeatId(item.id) ) {

            sumQuantity(quantity, item);

        } else {
            setCart([...cart, { ...item, quantity }]);
        }
       console.log(cart)
    };


    
    

    const repeatId = (id) => {
        const someId = cart.some((prod) => prod.id === id);
        return someId;
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

    const getCartTotalPrice = () => {
    
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
          
          totalPrice += cart[i].price * cart[i].quantity;
        }
          return totalPrice;
        
        
        
    }

    return (
        <CartContext.Provider
            value={{ cart, addCart, clean, deleteItem, getCartTotalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;