import React from 'react'
import NavBar from '../components/NavBar'
import Anouncement from "../components/Anouncement"
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


const Home = () => {
   
  return (
    <>
      <Anouncement/>
      <NavBar />
      <Slider />
      <Categories/>
      <Products />
      <NewsLetter />
      <Footer/>
    </>
  )
}

export default Home