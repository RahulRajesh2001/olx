import React, { useContext,  useState,useEffect } from 'react'
import Logo from '../../assets/olx-logo.png'
import axios from 'axios';
import './login.css'
import { useNavigate } from "react-router-dom";
import { loginContext } from '../../App.jsx';

const baseUrl = import.meta.env.VITE_BASEURL;

const Login = () => {
  const { handleLogin } = useContext(loginContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/v1/login`, {
        email: email,
        password: password,
      });

      if (response.data.user) {
        localStorage.setItem('token', response.data.user.tokens[0]);
        handleLogin();
        navigate('/');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error) {
        alert('UserName or Password is incorrect !!');
      }
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      handleLogin();
      navigate('/');
    }
  }, [handleLogin, navigate]);

  return (
    <div>
      <div className="loginParentDiv">
      <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a onClick={handleSignup}>Signup</a>
      </div>
    </div>
  );
};

export default Login;