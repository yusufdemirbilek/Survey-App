
import React from 'react'
import '../style.scss'
function Register() {
  return (
    <div className='form-conteiner'>
        
        <div className="form-wrapper">
        <h1>Survey</h1>
            <span className="logo"></span>
            <span className='title'></span>
            <form className='form'>
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input style={{display:"none"}} type="file"  id="file"/>
                
                <button type='submit'>Sign Up</button>
            </form> 
            <p>Do you have an account? Login</p>
        </div>

    </div>
  )
}

export default Register