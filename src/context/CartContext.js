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


    const addPrice= (price, item) => {
        if (repeatPrice(item.price) ) {

            sumPrice(price, item);

        } else {
            setCart([...cart, { ...price, item }]);
        }
       
    };
    

    const repeatId = (id) => {
        const someId = cart.some((prod) => prod.id === id);
        return someId;
    };
    const repeatPrice= (price) => {
        const somePrice = cart.some((prod) => prod.price === price);
    }
    


    const sumQuantity = (quantity, item) => {
        const copia = [...cart];
        copia.forEach((producto) => {
            if (producto.id === item.id) {
                producto.quantity += quantity;
            }
        });
    };

    const sumPrice = (price, item) => {
        const precio = [...cart];
        precio.forEach((producto) => {
            if (producto.price === item.price) {
                producto.price += price;
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
            value={{ cart, addCart, clean, deleteItem, addPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;