import React from 'react'
import Nav from '../components/Nav'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Nav/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home

