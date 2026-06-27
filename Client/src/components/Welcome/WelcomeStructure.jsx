import React from 'react'
import UpperWelcome from './UpperWelcome.jsx'
import WelcomeText from './WelcomeText.jsx'
import WelcomeButtons from './WelcomeButtons.jsx'

const WelcomeStructure = () => {
  return (
    <>
        <div className='bg-white h-screen w-full sm:h-screen sm:w-full lg:h-2/3 lg:w-1/2 flex flex-col items-center justify-start'>
            <UpperWelcome/>
            <WelcomeText/>
            <WelcomeButtons/>
        </div>
    </>
  )
}

export default WelcomeStructure