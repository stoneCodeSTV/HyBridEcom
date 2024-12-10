import React, { useState, useEffect } from 'react'
import  './Popular.css'
// import data_product from '../Assets/data' (to use dummy data)
import Item from '../Item/Item'

const Popular = () => {

  const [newestarrivals, setNewestArrivals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newestarrivals')
    .then(response => response.json())
    .then((data) => 
      setNewestArrivals(data));
  },[])

  return (
  <section id='shop'>
    <div className='popular'>
    <h3>Newest Arrivals</h3>
    <hr />
      <div className="popular-item">
        {newestarrivals.map((item, i) =>{
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