import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaListOl } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
            <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <MdOutlineAddShoppingCart />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <FaListOl  />
            <p>Product List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar