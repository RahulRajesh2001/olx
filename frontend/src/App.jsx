import React,{useContext} from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home.jsx'
import LoginPage from './pages/Login.jsx'
import  SignupPage from './pages/Signup.jsx'
import CreatePage from './pages/CreatePage.jsx';
import Logout from './components/logout/Logout.jsx';

export const loginContext=React.createContext();

const App = () => {

  return (
    <loginContext.Provider value={true}>
    <BrowserRouter>
    <Routes>
      <Route extact path='/' element={<Home/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path="/signup" element={<SignupPage/>}></Route>
    <Route path='/addProduct' element={<CreatePage/>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>
    </Routes>
    </BrowserRouter>
    </loginContext.Provider>

  )
}

export default App