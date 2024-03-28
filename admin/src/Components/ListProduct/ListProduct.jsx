import React, {useState, useEffect} from 'react'
import './ListProduct.css'
import { BsCartXFill } from "react-icons/bs";

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
      await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
      setAllProducts(data);
    });
  }

    useEffect(() => {
      fetchInfo();
    },[])

  return (
    <div className='listProduct'>
      <h3> All Products List</h3>
      <div className="listProduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Regular Price</p>
        <p>Sale Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProduct-allProducts">
        <hr />
          {allproducts.map((product,index)=> {
            return (
              <>
                <div key={index} className="listProduct-format-main listProduct-format">
                  <img src={product.image} alt={product.name} className='listProduct-productIcon' />
                  <p>{product.name}</p>
                  <p>{product.regPrice}$</p>
                  <p>{product.salePrice}$</p>
                  <p>{product.category}</p>
                  <p><BsCartXFill className='listproduct-removeIcon' /></p>
                </div>
                <hr />
              </>
            )
          })}
        </div>
      </div>
    )
  }
export default ListProduct