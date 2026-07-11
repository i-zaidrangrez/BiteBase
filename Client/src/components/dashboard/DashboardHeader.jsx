import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const DashboardHeader = ({ setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="flex h-20 items-center justify-between px-4 md:px-8">

        {/* Left */}

        <div className="flex items-center gap-4">

          {/* Mobile Menu */}

          <button
            onClick={() => setSidebarOpen?.(true)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              hover:bg-orange-50
              lg:hidden
            "
          >
            <FiMenu className="text-xl" />
          </button>

          <div>
            <h1 className="font-IMB text-3xl font-bold text-gray-900">
              Dashboard
            </h1>

            <p className="hidden text-sm text-gray-500 md:block">
              Welcome back, Admin
            </p>
          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          {/* Search */}

          <div className="relative hidden md:block">

            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="
                h-11
                w-72
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                pl-11
                pr-4
                outline-none
                transition
                focus:border-[#e8691a]
                focus:bg-white
              "
            />

          </div>

        </div>

      </div>
    </header>
  );
};

export default DashboardHeader;