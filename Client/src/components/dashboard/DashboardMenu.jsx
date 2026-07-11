import React from 'react'
import MenuHeader from '../Menu/MenuHeader'
import CategoryFilter from './dashboardMenu/CategoryFilter'
import MenuGrid from '../Menu/MenuGrid'
import Pagination from './dashboardMenu/Pagination'

const DashboardMenu = () => {
  return (
    <section className="flex flex-col gap-8 p-4 md:p-6">

      {/* Top Section */}
      <MenuHeader />

      {/* Categories */}
      <CategoryFilter />

      {/* Menu Items */}
      <MenuGrid />

      {/* Pagination */}
      <Pagination />

    </section>
  )
}

export default DashboardMenu