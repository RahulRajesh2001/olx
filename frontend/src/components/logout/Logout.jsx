import React, { useContext, useEffect } from 'react';
import { loginContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const isLogin = useContext(loginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/login');
      localStorage.removeItem('token')
    } else {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
