import React from 'react'
import Header from '../components/header/Header.jsx'
import Banner from '../components/banner/Banner.jsx'
import Posts from '../components/posts/Post.jsx'
import Footer from '../components/footer/Footer.jsx'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Posts/>
        <Footer/>
    </div>
  )
}

export default Home