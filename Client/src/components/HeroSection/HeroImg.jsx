import React from 'react'

import heroImg from '/heroImg.png'

const HeroImg = () => {
  return (
    <div className='w-full h-[2vh] hidden md:w-4/10 md:h-[50vw] sm:hidden md:flex lg:flex lg:h-full items-center'>
            <img src={heroImg} className='h-7/10 rounded-[10vh] rounded-tl-[25vh]' alt="" />
        </div>
  )
}

export default HeroImg