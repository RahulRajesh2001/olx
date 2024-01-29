import React, { useContext } from 'react'
import './header.css'
import OlxLogo from '../../assets/OlxLogo.jsx'
import Search from '../../assets/Search.jsx'
import Arrow from '../../assets/Arrow.jsx'
import SellButton from '../../assets/SellButton.jsx'
import SellButtonPlus from '../../assets/SellButtonPlus.jsx'
import { loginContext } from '../../App.jsx'

const Header = () => {
  
  const {handleLogout } = useContext(loginContext);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <a className='loginlink' href='/login'>Login</a>
          <hr />
        </div>
        <div className="loginPage">
          <a className='loginlink' href='/logout' onClick={handleLogout}>Logout</a>
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <a href='/addProduct'>SELL</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header