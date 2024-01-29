import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';
import CreatePage from './pages/CreatePage.jsx';
import Logout from './components/logout/Logout.jsx';

export const loginContext = React.createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !logout) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [logout]);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
    setLogout(true);
    localStorage.removeItem('token')
  };

  const contextValue = {
    handleLogin,
    handleLogout,
  };

  return (
    <loginContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          {!isLogin ? (
            <>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='*' element={<Navigate to='/login' />} />
            </>
          ) : (
            <>
              <Route exact path='/' element={<Home />} />

              <Route path='/logout' element={<Logout />} />
              <Route path='*' element={<Navigate to='/' />} />
            </>
                          
          )}
          <Route path='/addProduct' element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
  );
};

export default App;
