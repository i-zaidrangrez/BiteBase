import React from 'react'

const Services = () => {
  return (
    <div className='w-full flex h-full md:gap-10'>
                <div className=' h-full w-1/2 flex gap-2 items-center justify-center font-IMB flex-col  sm:w-2/3 sm:flex-row'>
                    <div className='bg-orange-200 h-full w-4/10 rounded-full flex-col items-center justify-center sm:w-1/2'><img className='h-full' src="https://imgs.search.brave.com/k42SgqPh6InIk-r6AVM4Hz7fkOCcGmEoV7CIa1EPxB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9zY29vdGVy/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/NTgxNTQ3LnBuZz9m/PXdlYnAmdz0xMjg" alt="" /></div>
                    <div className='h-full w-full flex flex-col justify-center'>
                        <div className='text-center font-bold text-[clamp(3vh,4vh)] font-IMB sm:text-start w-full'>Fast Delivery </div>
                        <div className='font-medium text-[2vh] hidden sm:flex text-gray-600'>On time, Everytime</div>
                    </div>
                </div>
                <div className=' h-full w-1/2 flex gap-2 items-center justify-center font-IMB flex-col  sm:w-2/3 sm:flex-row'>
                    <div className='bg-green-200 h-full w-4/10 rounded-full flex items-center justify-center sm:w-1/2'><img className='h-full' src="https://imgs.search.brave.com/4IuD6nFc3AZz3rt7igb-7lbhDFv6QXzieE2zoaC-ERk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9kb2xsYXIt/c2hpZWxkLWljb24t/c3ZnLWRvd25sb2Fk/LXBuZy0xMzgzNTM1/MS5wbmc_Zj13ZWJw/Jnc9MTI4" alt="" /></div>
                    <div className='h-full w-full flex flex-col justify-center'>
                        <div className='text-center font-bold text-[clamp(3vh,4vh)] font-IMB sm:text-start w-full'>Secure Payment</div>
                        <div className='font-medium text-[2vh] hidden sm:flex text-gray-600'>100% protected</div>
                    </div>
                </div>
                <div className='h-full w-1/2 flex gap-2 items-center justify-center font-IMB flex-col  sm:w-2/3 sm:flex-row'>
                    <div className='bg-yellow-200 h-full w-4/10 rounded-full flex items-center justify-center sm:w-1/2'><img className='h-full' src="https://imgs.search.brave.com/7_2jvLNdXolEN6uYzs9gToTHSEaKDxz3moM-WmqaQNc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9tZWRhbC1p/Y29uLXN2Zy1kb3du/bG9hZC1wbmctMTA4/MjQyODcucG5nP2Y9/d2VicCZ3PTEyOA" alt="" /></div>
                    <div className='h-full w-full flex flex-col justify-center'>
                        <div className='text-center font-bold text-[clamp(3vh,4vh)] font-IMB sm:text-start w-full'>Best Quality</div>
                        <div className='font-medium text-[2vh] hidden sm:flex text-gray-600'>Always Fresh</div>
                    </div>
                </div>
            </div>
  )
}

export default Services