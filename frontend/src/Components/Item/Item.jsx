import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
  <div className='item'>
    <img src = {props.image} alt='item unavailable'/>
    <p>{props.name}</p>
    <div className='item-prices'>
    <div class="item-regPrice">
      {props.regPrice}$
    </div>
    <div class="item-salePrice">
      {props.salePrice}$
    </div>
    </div>
  </div>
  )
}

export default Item