import React from 'react'
import Nav from '../components/Nav'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Nav/>
      <Slider/>
      <Categories/>
    </div>
  )
}

export default Home

