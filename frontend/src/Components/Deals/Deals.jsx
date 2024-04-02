import React, { useEffect, useState } from 'react'
import './Deals.css'
import deals from '../Assets/deals'
import Item from '../Item/Item'



const Deals = () => {

  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/deals')
    .then(response => response.json())
    .then((data) => 
      setDeals(data));
  },[])

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