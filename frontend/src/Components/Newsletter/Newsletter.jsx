import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1> Get Exlusive Promos by Email </h1>
        <p> Subscribe and Save!</p>
        <div>
            <input type="email" placeholder="Enter email address"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter