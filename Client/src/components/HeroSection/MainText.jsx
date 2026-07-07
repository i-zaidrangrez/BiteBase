import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const MainText = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='font-IMB text-[3vmin] bg-[#feefe3] text-[#e8691a]'>Fast Delivery &middot; Best Quality &middot; Great Prices</div>
            <div className='h-4/10 w-full'>
                <h1 className='w-full font-IMB text-[10vmin] leading-tight'>Delicious Food, <br /> <span className='text-[#e8691a]'>Delivered</span> To You</h1>
            </div>
            <div className='text-[4vmin] w-full font-IMB'>
                <p>Discover your favorite meal and get them <br /> Delivered hot and fresh at your doorstep</p>
            </div>
            <div className='flex flex-col gap-2 h-[30vmin]'>
                <button className='bg-[#e8691a] text-white flex items-center justify-center font-IMB gap-5 p-2 rounded-3xl text-[4vmin] hover:bg-orange-300'>Order Now <FaArrowRight /></button>
                <button className='border border-gray-300 flex items-center justify-center font-IMB gap-5 p-2 rounded-3xl text-[4vmin] hover:bg-gray-300'>Explore Menu</button>
            </div>
    </div>
  )
}

export default MainText