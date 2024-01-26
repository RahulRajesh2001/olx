import React, { useState } from 'react';
import Logo from '../../assets/olx-logo.png';
import './signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASEURL;

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // Import useNavigate from react-router-dom
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${baseUrl}/api/v1/register`, {
        name: name,
        email: email,
        password: password,
        phone: phone
      });
  
      if (response.data.users) {
        localStorage.setItem('token', response.data.users.tokens[0]);
        navigate("/login");
      } else {
        navigate('/register');
      }
    } catch (err) {
      console.error(err);
      if (err) {
        alert("There is a mistake in your form!");
      }
    }
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleSignup}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Signup;