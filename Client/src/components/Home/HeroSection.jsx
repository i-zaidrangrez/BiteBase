import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import heroImg from '/heroImg.png'

const HeroSection = () => {
  return (
    <div className=' w-full h-9/10 p-2 block sm:w-full md:flex sm:p-10 flex-wrap'>
        <div className='w-full md:w-6/10 h-full p-5 flex flex-col gap-5'>
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
            <div className='w-full h-1/9 sm:h-1/7 -mt-8 sm:mt-0  flex sm:flex-row flex-col sm:gap-0 gap-2'>
                <div className=' h-full w-full sm:w-1/3 flex gap-2 items-center justify-center font-IMB'>
                    <div className='bg-orange-200 h-full w-3/10 rounded-full flex items-center justify-center'><img className='h-7/10' src="https://imgs.search.brave.com/k42SgqPh6InIk-r6AVM4Hz7fkOCcGmEoV7CIa1EPxB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9zY29vdGVy/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/NTgxNTQ3LnBuZz9m/PXdlYnAmdz0xMjg" alt="" /></div>
                    <div className='h-full w-5/10 flex flex-col justify-center'>
                        <div className='font-bold text-[4vw] sm:text-[1vw]'>Fast Delivery </div>
                        <div className='font-medium text-[2vh] sm:text-[1vw] text-gray-600'>On time, Everytime</div>
                    </div>
                </div>
                <div className=' h-full w-full sm:w-1/3  flex gap-2 items-center justify-center font-IMB'>
                    <div className='bg-green-200 h-full w-3/10 rounded-full flex items-center justify-center'><img className='h-7/10' src="https://imgs.search.brave.com/4IuD6nFc3AZz3rt7igb-7lbhDFv6QXzieE2zoaC-ERk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9kb2xsYXIt/c2hpZWxkLWljb24t/c3ZnLWRvd25sb2Fk/LXBuZy0xMzgzNTM1/MS5wbmc_Zj13ZWJw/Jnc9MTI4" alt="" /></div>
                    <div className='h-full w-5/10 flex flex-col justify-center'>
                        <div className='font-bold text-[4vw] sm:text-[1vw]'>Secure Payment</div>
                        <div className='font-medium text-[2vh] text-gray-600 sm:text-[1vw]'>100% protected</div>
                    </div>
                </div>
                <div className=' h-full w-full sm:w-1/3  flex gap-2 items-center justify-center font-IMB'>
                    <div className='bg-yellow-200 h-full w-3/10 rounded-full flex items-center justify-center'><img className='h-7/10' src="https://imgs.search.brave.com/7_2jvLNdXolEN6uYzs9gToTHSEaKDxz3moM-WmqaQNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9tZWRhbC1p/Y29uLXN2Zy1kb3du/bG9hZC1wbmctMTA4/MjQyODcucG5nP2Y9/d2VicCZ3PTEyOA" alt="" /></div>
                    <div className='h-full w-5/10 flex flex-col justify-center'>
                        <div className='font-bold text-[4vw] sm:text-[1vw]'>Best Quality</div>
                        <div className='font-medium text-[2vh] text-gray-600 sm:text-[1vw]'>Always Fresh</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[2vh] hidden md:w-4/10 md:h-[50vw] sm:hidden md:flex lg:flex lg:h-full items-center'>
            <img src={heroImg} className='h-7/10 rounded-[10vh] rounded-tl-[25vh]' alt="" />
        </div>
    </div>
  )
}

export default HeroSection