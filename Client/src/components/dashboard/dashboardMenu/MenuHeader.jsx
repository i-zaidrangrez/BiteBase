import { FaPlus, FaSearch } from "react-icons/fa";

const MenuHeader = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

      {/* Left */}

      <div>
        <h1 className="font-IMB text-3xl font-bold text-gray-900 md:text-4xl">
          Menu Management
        </h1>

        <p className="mt-2 font-IMB text-gray-500">
          Manage and organize your restaurant menu items.
        </p>
      </div>

      {/* Right */}

      <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">

        {/* Search */}

        <div className="relative flex-1 lg:w-[360px]">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search menu items..."
            className="
              h-12
              w-full
              rounded-xl
              border
              border-gray-200
              bg-white
              pl-11
              pr-4
              outline-none
              transition
              focus:border-[#e8691a]
              focus:ring-2
              focus:ring-orange-100
            "
          />
        </div>

        {/* Button */}

        <button
          className="
            flex
            h-12
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-[#e8691a]
            px-6
            font-semibold
            text-white
            transition
            hover:bg-orange-600
            active:scale-95
          "
        >
          <FaPlus />

          Add New Item
        </button>

      </div>

    </div>
  );
};

export default MenuHeader;