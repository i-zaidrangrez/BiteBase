import { FiSearch, FiFilter } from "react-icons/fi";

const MenuHeader = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        {/* Left */}

        <div>
          <h1 className="font-IMB text-4xl font-bold text-gray-900">
            Our Menu
          </h1>

          <p className="mt-2 max-w-xl text-gray-500">
            Discover our delicious food, made with love and fresh ingredients.
          </p>
        </div>

        {/* Right */}

        <div className="flex flex-col gap-3 sm:flex-row">

          <div className="relative w-full sm:w-[360px]">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />

            <input
              type="text"
              placeholder="Search for dishes..."
              className="
                h-12
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-12
                pr-4
                outline-none
                transition
                focus:border-[#e8691a]
              "
            />
          </div>

          <button
            className="
              flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-200
              px-6
              hover:bg-orange-50
              transition
            "
          >
            <FiFilter />
            Filter
          </button>

        </div>

      </div>
    </section>
  );
};

export default MenuHeader;