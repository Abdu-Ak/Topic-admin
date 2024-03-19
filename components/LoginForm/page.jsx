"use client"
import React, { useState } from 'react'

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setCredentials({ ...credentials, [name]: value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
        
       if (response.ok) {
       
        console.log(await response.json());

       }else{
        const errorResponse = await response.json();
        
         console.log(errorResponse);
       }

       
      } catch (error) {
        console.error('Error:', error);
        // Handle error, show error message, etc.
      }
    };
  return (
    <form className="pt-3" onSubmit={handleSubmit}>
    <div className="form-group">
      <input type="email" className="form-control form-control-lg" name="email" placeholder="Username" onChange={handleInputChange}/>
    </div>
    <div className="form-group">
      <input type="password" className="form-control form-control-lg" name="password" placeholder="Password" onChange={handleInputChange}/>
    </div>
    <div className="mt-3">
      <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
    </div>
    {/* <div className="my-2 py-2 flex justify-end align-items-center">
     
      <a href="#" className="auth-link text-black">Forgot password?</a>
    </div> */}
  </form>
  )
}

export default LoginForm