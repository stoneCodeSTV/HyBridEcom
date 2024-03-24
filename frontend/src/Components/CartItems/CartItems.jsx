import React, {useContext} from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/ShopContext'
import { BsBagXFill } from "react-icons/bs";

const CartItems = () => {

    const {all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
          {all_products.map((e) => {
            if(cartItems[e.id] > 0) 
            {
              return <div>
                        <div className="cartitems-format cartitems-format-main">
                          <img src={e.image} alt="product" className='carticon-product-icon' />
                          <p>{e.name}</p>
                          <p>{e.salePrice}$</p>
                          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                          <p>{e.salePrice*cartItems[e.id]}$</p>
                          <BsBagXFill className='carticon-xbag' onClick= {() => {removeFromCart(e.id)}}/> 
                        </div>
        <hr/>
              </div>
          } 
            return null;
        })}
        <div className="cartitems-bottom">
          <div className="cartitems-total">
            <h3>Cart Totals</h3>
              <div>
                <div className="cartitems-total-items">
                  <p>Subtotal</p>
                  <p>{getTotalCartAmount()}$</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                  <h3>Total</h3>
                  <h5>{getTotalCartAmount()}$</h5>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promo">
            <p>If you have a promo code, Enter it below.</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="Enter Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems