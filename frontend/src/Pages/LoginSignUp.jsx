import React, { useState } from 'react'

const LoginSignUp = () => {

  const [state, setState] = useState('Sign Up');
  const [formData, setFormData] = useState({
        username:'', 
        email:'', 
        password:''
      })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const signUp = async () => {
    console.log('Sign Up Clicked',formData);
    let responseData; 
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
    responseData = data;
    })

    if(responseData.success)
    {
      localStorage.setItem('authToken',responseData.authToken);
      console.log('User Created');
      window.location.replace('/');
    }
    else
    {
      alert(responseData.error);
    }
  }

  const login = async () => {
    console.log('Login Clicked',formData);
    let responseData; 
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
    responseData = data;
    })

    if(responseData.success)
    {
      localStorage.setItem('authToken',responseData.authToken);
      console.log('Logged In Succesfully');
      window.location.replace('/');
    }
    else
    {
      alert(responseData.error);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==='Sign Up'?
          <input 
            name='username' 
            value={formData.username} 
            onChange={handleChange} 
            type="text" 
            placeholder= 'Your Name' />:<></>
          }
          <input 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
            type="email" 
            placeholder='Enter Email Address' />
          <input 
            name='password' 
            value={formData.password} 
            onChange={handleChange} 
            type="password" 
            placeholder='Enter Password' />
        </div>
        <button 
          onClick={() => {state==='Login'?login():signUp()}} 
          className='signup-btn'>Continue 
        </button>
          {state==='Sign Up'?
            <p className="loginsignup-login">Already have an account?
              <span onClick={() =>{setState('Login')}}>Login Here</span> 
            </p>
            :<p className="loginsignup-login"> Create an account?
              <span onClick={() =>{setState('Sign Up')}}>Sign Up Here</span> 
            </p>
          }
          <div class="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p> By continuing, I agree to the terms of use and privacy policies.</p>
          </div>
        </div>      
      </div>
    )
  }      

export default LoginSignUp