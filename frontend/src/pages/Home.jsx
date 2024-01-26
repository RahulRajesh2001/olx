import React, { useContext, useEffect } from 'react';
import Header from '../components/header/Header.jsx';
import Banner from '../components/banner/Banner.jsx';
import Posts from '../components/posts/Post.jsx';
import Footer from '../components/footer/Footer.jsx';
import { loginContext } from '../App.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const islogin = useContext(loginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (islogin) {
      navigate('/');
    }else{
      navigate('/login')
    }
  }, [islogin, navigate]);

  return islogin && (
    <div className='overflow-hidden'>
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
