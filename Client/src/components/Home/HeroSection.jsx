import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import heroImg from '/heroImg.png'
import MainText from '../HeroSection/MainText'
import Services from '../HeroSection/Services'
import HeroImg from '../HeroSection/HeroImg'

const HeroSection = () => {
  return (
    <div className=' w-full h-9/10 p-2 block sm:w-full md:flex sm:p-10 flex-wrap'>
        <div className='w-full md:w-6/10 h-full p-5 flex flex-col gap-5'>
            <MainText/>
            <Services/>
        </div>
       <HeroImg/>
    </div>
  )
}

export default HeroSection