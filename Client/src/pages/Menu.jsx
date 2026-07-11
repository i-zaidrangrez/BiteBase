import React from 'react'
import MenuHeader from '../components/Menu/MenuHeader'
import CategoryTabs from '../components/Menu/CategoryTabs'
import MenuGrid from '../components/Menu/MenuGrid'

const Menu = () => {
  return (
    <div className='mt-5 px-5 py-2'>
      <MenuHeader/>
      <CategoryTabs/>
      <MenuGrid/>
    </div>
  )
}

export default Menu