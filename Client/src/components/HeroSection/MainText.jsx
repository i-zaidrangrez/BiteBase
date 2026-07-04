import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const MainText = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='font-IMB flex justify-center sm:text-[2vw] lg:text-[1vw] rounded-full bg-[#feefe3] text-[#e8691a] font-medium w-full sm:w-5/10 md:w-full lg:w-1/2'>Fast Delivery &middot; Best Quality &middot; Great Prices</div>
            <div className='h-4/10 w-full'>
                <h1 className='w-full text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[5vw] leading-tight font-medium font-IMB'>Delicious Food, <br /> <span className='text-[#e8691a]'>Delivered</span> To You</h1>
            </div>
            <div className='-mt-25 sm:mt-0 text-[4vw] sm:text-[3vw] md:text-[2vw]  w-full font-IMB'>
                <p>Discover your favorite meal and get them <br /> Delivered hot and fresh at your doorstep</p>
            </div>
            <div className='h-1/5 sm:h-1/6 w-full flex-col flex gap-2 sm:flex-row items-center sm:gap-10'>
                <button className='bg-[#e8691a] text-white md:px-15 px-10 sm:text-[2vw] sm:py-[1vw] py-[2vw] md:text-[1vw] rounded-2xl flex items-center gap-3 justify-center duration-300 hover:gap-5 w-full'>Order Now <FaArrowRight /></button>
                <button className='border border-gray-300 md:px-15 px-10 sm:py-[1vw] sm:text-[2vw] py-[2vw] md:text-[1vw] rounded-2xl w-full hover:bg-gray-300'>Explore Menu</button>
            </div>
    </div>
  )
}

export default MainText