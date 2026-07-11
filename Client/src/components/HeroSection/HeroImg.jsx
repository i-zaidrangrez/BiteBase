import React from 'react'

import heroImg from '/heroImg.png'

const HeroImg = () => {
  return (
    <div className='sm:mb-10 h-[clamp(20rem,45vw,35rem)] flex justify-center overflow-hidden'>
            <img src={heroImg} className='rounded-full drop-shadow-2xl transition-transform duration-500 ease-out hover:scale-105 h-9/10 w-9/10 object-contain animate-float' alt="" />
        </div>
  )
}

export default HeroImg