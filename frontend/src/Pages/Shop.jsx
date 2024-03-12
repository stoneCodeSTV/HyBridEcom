import React from 'react'
import TopShop from '../Components/TopShop/TopShop'
import Deals from '../Components/Deals/Deals'
import Products from '../Pages/Products'

const Shop = () => {
  return (
    <div className='shop'>
    <TopShop />
    {/*<Deals />*/}
    <Products />
    </div>
  )
}

export default Shop