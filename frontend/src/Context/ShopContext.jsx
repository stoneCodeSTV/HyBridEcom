import React, { createContext, useState, useEffect } from "react";
import CartItems from "../Components/CartItems/CartItems";
// import all_products from '../Components/Assets/all_products';

export const ShopContext = createContext(null); 

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 500+1; i++) {
        cart[i] = 0;
    }
    return cart; 
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_products, setAll_Products] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
        .then((response) => response.json())
        .then((data) => {
        setAll_Products(data);
        })
    }, []);

        const addToCart = (id) => { 
            setCartItems((prev) =>({...prev, [id]:prev[id]+1}));
            if(localStorage.getItem('authToken'))
            {
                fetch('http://localhost:4000/addtocart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'authToken': `${localStorage.getItem('authToken')}`
                    },
                    body:JSON.stringify({'id':id}),
                })
                .then(response => response.json())
                .then(data =>console.log(data));
            }
        }

        const removeFromCart = (id) => { 
            setCartItems((prev) =>({...prev, [id]:prev[id]-1}));
        }

        const getTotalCartAmount = () => {
            let total = 0;
            for (const item in cartItems) 
            {
                if(cartItems[item] > 0) 
                {
                    let itemData = all_products.find((product) => product.id === Number(item));
                    total += itemData.salePrice * cartItems[item];
                }
            }
            return total;
        }

        const getTotalCartItems = () => {
            let totalItems = 0;
            for (const item in cartItems) 
            {
                if(cartItems[item] > 0) 
                {
                    totalItems += cartItems[item];
                }
            }
            return totalItems;
        }

    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartItems, getTotalCartAmount};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 