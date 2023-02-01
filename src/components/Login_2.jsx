import React from 'react';
import'../Login-2.css';
import { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login_2(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a request to the backend to authenticate the user
      const response = await axios.post('/api/login', { email, password });
      // Extract the JWT token from the response
      const token = response.data.token;
      // Store the JWT token in local storage
      localStorage.setItem('token', token);
      // Redirect the user to the protected page
      props.history.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://www.lstyazilim.com/wp-content/uploads/2022/02/logossss.png.webp"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Survey Login Screen</h4>
            </div>

            <p>Please login to your account</p>

            <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'  onChange={(e) => setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'  onChange={(e) => setPassword(e.target.value)}/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>
            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Create New Account
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login_2;