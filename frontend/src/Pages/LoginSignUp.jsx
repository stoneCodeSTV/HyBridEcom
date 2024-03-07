import React from 'react'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
    <div className="loginsignup-fields">
      <input type="text" placeholder= 'Your Name' />
      <input type="email" placeholder= 'Enter Email Address' />
      <input type="password" placeholder= 'Enter Password' />
    </div>
      <button className='signup-btn'> Continue </button>
        <p className="loginsignup-login"> Already have an account?
        <span> Login Here</span> 
        </p>
    <div class="loginsignup-agree">
      <input type="checkbox" name='' id=''/>
      <p> By continuing, I agree to the terms of use and privacy policies.</p>
    </div>
    </div>      
    </div>
  )
}      

export default LoginSignUp