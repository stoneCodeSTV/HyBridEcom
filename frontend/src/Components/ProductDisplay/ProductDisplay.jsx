import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png' 

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src= {product.image} alt='' />
                <img src= {product.image} alt='' />
                <img src= {product.image} alt='' />
                <img src= {product.image} alt='' />
            </div>
            <div className="productDisplay-img">
                <img className="productDisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
                <div className="productDisplay-right-rating">
                    <img src= {star_icon} alt='' />
                    <img src= {star_icon} alt='' />
                    <img src= {star_icon} alt='' />
                    <img src= {star_icon} alt='' />
                    <img src= {star_dull_icon} alt='' />
                    <p>(425)</p>
                </div> 
        
        </div>
    </div>
  )
}
export default ProductDisplay