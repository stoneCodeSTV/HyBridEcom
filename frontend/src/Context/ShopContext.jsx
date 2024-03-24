import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_products';

export const ShopContext = createContext(null); 

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_products.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

        const addToCart = (id) => { 
            setCartItems((prev) =>({...prev, [id]:prev[id]+1}));
            console.log(cartItems);
        }

        const removeFromCart = (id) => { 
            setCartItems((prev) =>({...prev, [id]:prev[id]-1}));
        }

    const contextValue = {all_products, cartItems, addToCart, removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 