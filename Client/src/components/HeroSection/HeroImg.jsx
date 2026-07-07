import React from 'react'

import heroImg from '/heroImg.png'

const HeroImg = () => {
  return (
    <div className='sm:mb-10 overflow-hidden h-[75vmin]'>
            <img src={heroImg} className='rounded-full h-full' alt="" />
        </div>
  )
}

export default HeroImg