import React, { useState } from 'react';
 import '../style.scss';
import * as bootstrap from 'bootstrap'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setError(null);
    // Send the login request to the server
    fetch('https://your-server-url.com/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success){
        // Login successful, redirect the user
        window.location.href = '/dashboard';
        } else {
        // Login failed, display an error message
        setError(data.error);
        }
        })
        .catch(error => {
        console.error(error);
        });
        }
        
        return (
          <div className='main'>
           <div className="resim">
            <img src="https://www.lstyazilim.com/wp-content/uploads/2022/02/logossss.png.webp" alt="login" />
           </div>
        <div className='form-conteiner'>
        <div className="form-wrapper">
        <h1>Survey</h1>
        <span className="logo"></span>
        <span className='title'></span>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        {error && <p className='error-message'>{error}</p>}
        <p>You don't have an account? Register</p>
        </div>
        
        </div>
        </div>
        )
        }
        
        export default Login;
