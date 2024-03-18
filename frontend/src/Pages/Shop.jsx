import React from 'react'
import TopShop from '../Components/TopShop/TopShop'
import Deals from '../Components/Deals/Deals'
import Popular from '../Components/Popular/Popular'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
    <TopShop />
    <Popular />
    <Deals />
    <Newsletter />
    </div>
  )
}

export default Shop