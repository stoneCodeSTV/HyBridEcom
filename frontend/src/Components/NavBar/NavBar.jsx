import React, { useContext, useRef, useState, } from 'react'
import './NavBar.css'
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import { ShopContext } from '../../Context/ShopContext';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {

    const SearchBar = ({ searchQuery, onChange }) => (
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchQuery}
          onChange={onChange} />
      );

    const [menu, setMenu] = useState('shop')
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>

        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <Link to='/'><p onClick={() => {setMenu('shop')}}>Hybrid E-Com</p></Link>
        </div>

        <RxHamburgerMenu className='nav-dropdown' onClick={dropdownToggle} />
        <ul ref={menuRef} className='nav-menu'>
            <Link to='/'><li onClick={() => {setMenu('shop')}}>Newest{menu==='shop'?<hr/>:<></>}</li></Link>
            <Link to='/sports'><li onClick={() => {setMenu('sports')}}>Sports{menu==='sports'?<hr/>:<></>}</li></Link>
            <Link to='/lifestyle'><li onClick={() => {setMenu('lifestyle')}}>LifeStyle{menu==='lifestyle'?<hr/>:<></>}</li></Link>
            <Link to='/electronics'><li onClick={() => {setMenu('electronics')}}>Electronics{menu==='electronics'?<hr/>:<></>}</li></Link>
        </ul>

        <div className='nav-login-cart'>
            <SearchBar searchQuery='' onChange='' onClick/>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><BiSolidShoppingBags className='cart' /></Link>
            <div className='cart-count'>{getTotalCartItems()}</div>
        </div>
       
        

    </div>
  )
}

export default NavBar