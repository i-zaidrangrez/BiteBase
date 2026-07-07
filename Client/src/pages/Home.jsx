import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Home/Navbar'
import HeroSection from '../components/Home/HeroSection'
import Category from '../components/Home/Category'

const Home = () => {
    const auth = useSelector((state)=>state.auth)
  return (
    <div className='h-full w-full overflow-x-hidden relative'>
      <Navbar/>
      <HeroSection/>
      <Category/>
    </div>
  )
}

export default Home