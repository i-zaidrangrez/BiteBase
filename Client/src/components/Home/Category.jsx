import React from 'react'
import { IoIosMore } from 'react-icons/io'

const Category = () => {
  return (
    <div className=' flex items-center justify-center h-[30vh]'>
        <div className=' w-full h-8/10 md:mx-20 rounded-4xl grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 px-2 shadow-2xl'>
            <div className=' h-35 w-35'>
                <div className='flex flex-col h-full items-center justify-center gap-2'>
                    <img className='h-1/2 bg-orange-200  p-2 rounded-full' src="https://static.vecteezy.com/system/resources/previews/078/130/866/non_2x/plasticine-burger-toy-fast-food-model-on-transparent-background-png.png" alt="" />
                    <h1 className='font-IMB font-bold'>Burger</h1>
                </div>
            </div>
            <div className=' h-35 w-35'>
                <div className='flex flex-col h-full items-center justify-center gap-2'>
                    <img className='h-1/2 bg-orange-200  p-2 rounded-full' src="https://static.vecteezy.com/system/resources/previews/078/130/893/non_2x/playful-clay-pizza-slice-toy-on-transparent-background-png.png" alt="" />
                    <h1 className='font-IMB font-bold'>Pizza</h1>
                </div>
            </div>
            <div className=' h-35 w-35 hidden sm:block'>
                <div className='flex flex-col h-full items-center justify-center gap-2'>
                    <img className='h-1/2 bg-orange-200  p-2 rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/057/820/571/small_2x/realistic-toy-chicken-drumstick-on-a-plain-surface-png.png" alt="" />
                    <h1 className='font-IMB font-bold'>Chicken</h1>
                </div>
            </div>
            <div className=' h-35 w-35 hidden md:block'>
                <div className='flex flex-col h-full items-center justify-center gap-2'>
                    <img className='h-1/2 bg-orange-200  p-2 rounded-full' src="https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-french-fries-on-white-bowl-isolated-fried-fast-food-snack-isolated-png-image_10155460.png" alt="" />
                    <h1 className='font-IMB font-bold'>Snacks</h1>
                </div>
            </div>
            <div className=' h-35 w-35 hidden lg:block'>
                <div className='flex flex-col h-full items-center  justify-center gap-2'>
                    <img className='h-1/2 bg-orange-200  p-2 rounded-full' src="https://png.pngtree.com/png-vector/20260109/ourmid/pngtree-apple-soda-toy-png-image_18467472.webp" alt="" />
                    <h1 className='font-IMB font-bold'>Beverages</h1>
                </div>
            </div>
            <div className=' h-35 w-35 hidden lg:block'>
                <div className=' flex-col h-full flex items-center justify-center gap-2'>
                    <img className='h-1/2 bg-orange-200  p-2 rounded-full' src="https://png.pngtree.com/recommend-works/png-clipart/20250524/ourmid/pngtree-small-cake-toy-frosting-flavor-png-image_16369268.png" alt="" />
                    <h1 className='font-IMB font-bold'>Deserts</h1>
                </div>
            </div>
            <div className=' h-35 w-35'>
                <div className='flex flex-col h-full items-center justify-center gap-2'>
                    <div className='h-1/2 w-1/2 flex items-center justify-center text-[4vw] md:text-[2vw] bg-orange-200  p-2 rounded-full'><IoIosMore /></div>
                    <h1 className='font-IMB font-bold'>More</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category