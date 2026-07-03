import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Home/Navbar'
import HeroSection from '../components/Home/HeroSection'

const Home = () => {
    const auth = useSelector((state)=>state.auth)
  return (
    <div className='h-screen w-full overflow-x-hidden relative'>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default Home