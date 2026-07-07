import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import heroImg from '/heroImg.png'
import MainText from '../HeroSection/MainText'
import Services from '../HeroSection/Services'
import HeroImg from '../HeroSection/HeroImg'
import Category from './Category'

const HeroSection = () => {
  return (
    <div className=' w-full h-full px-10 py-5 flex-wrap'>
      <div className='flex flex-col items-start justify-start md:flex-row'>
        <div className='h-8/10 p-2 md:w-1/2'>
          <MainText/>
        </div>
        <div className='w-full h-full md:w-1/2 flex items-center'>
          <HeroImg/>
        </div>
      </div>
      <div className='w-full md:w-2/3 px-5 mt-10 md:mt-0 md:ml-15'>
        <Services/>
      </div>
    </div>
  )
}

export default HeroSection