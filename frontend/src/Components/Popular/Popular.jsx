import React from 'react'
import  './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
  <section id='shop'>
    <div className='popular'>
    <h3>Newest Arrivals</h3>
    <hr />
      <div className="popular-item">
        {data_product.map((item, i) =>{
          return <Item key={i} 
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  regPrice={item.regPrice}
                  salePrice={item.salePrice}
                  />
        })}
      </div>
    </div>
  </section>
  )
}

export default Popular