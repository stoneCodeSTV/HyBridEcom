import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaXTwitter , FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (

    <footer className='footer-container'>
        <div className='footer-content'>
        <div className='footer-section'>
            <h5 className='titles'>HYBRID E-COM</h5>
            <Link className='info' to='/feedback'>FEEDBACK</Link>
        </div>
                <div className="footer-section">
                    <h5 className="titles">INFO</h5>
                    <Link className="info"  to="/">Order Status</Link>
                    <Link className="info"  to="/">Shipping & Delivery</Link>
                    <Link className="info"  to="/">Returns</Link>
                    <Link className="info"  to="/">Payment Options</Link>
                </div>
                    <div className="footer-section">
                    <h5 className="titles">ABOUT US</h5>
                    <Link className="info" to="/">News</Link>
                    <Link className="info" to="/">Careers</Link>
                    <Link className="info" to="/">Contact Us</Link>
                    </div>

                <div className="footer-section">
                <a className="info" href="https://twitter.com"><FaXTwitter /></a>
                    <a className="info" href="https://facebook.com"><FaFacebookF /></a>
                    <a className="info" href="https://youtube.com"><FaYoutube /></a>
                    <a className="info" href="https://instagram.com"><FaInstagram /></a>
                </div>

            </div>
            <div >
                <div className="footer-legal">
                <Link id="copy" to="/">&copy; {new Date().getFullYear()} HYBRID E-COM. All Rights Reserved &copy;</Link>
                    <Link to="/">Privacy & Cookie Policy</Link>
                    <Link to="/">Cookie Settings</Link>

                </div>
    </div>
    
    </footer>
  )
}

export default Footer