import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/olx-logo.png'
import axios from 'axios';
import './login.css'
import { useNavigate } from "react-router-dom";
import { loginContext } from '../../App.jsx';

const baseUrl = import.meta.env.VITE_BASEURL;
const Login = () => {

  let islogin=useContext(loginContext)

  const navigate = useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

 
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${baseUrl}/api/v1/login`, {
        email: email,
        password: password,
      })

      if (response.data) {
        localStorage.setItem('token', response.data.user.tokens[0]);
        let islogin=true
        navigate("/");
      } else {
        navigate('/login')
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error) {
        alert("UserName or Password is incorrect !!")
      }
    }
  };
  

  return (
    <div>
    <div className="loginParentDiv">
      <img width="200px" height="200px" src={Logo}></img>
      <form onSubmit={handleLogin}>
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          id="fname"
          name="email"
          value={email}
          defaultValue="John"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="lname">Password </label>
        <br />
        <input
          className="input"
          type="password"
          id="lname"
          name="password"
          value={password}
          defaultValue="Doe"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type='submit'>Login</button>
      </form>
      <a href='/signup'>Signup</a>
    </div>
  </div>
  )
}

export default Login