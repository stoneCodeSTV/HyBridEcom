import React from 'react'
import './Deals.css'
import deals from '../Assets/deals'
import Item from '../Item/Item'


const Deals = () => {
  return (
    <section id='deals'>
    <div className='new-deals'>
      <h3>Deals</h3>
      <hr />
        <div className="deals">
        {deals.map((item,i) => {
        return <Item key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                regPrice={item.regPrice}
                salePrice={item.salePrice}  />
                })}
        </div>
    </div>
    </section>
  )
}

export default Deals