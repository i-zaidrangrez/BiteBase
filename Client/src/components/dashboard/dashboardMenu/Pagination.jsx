import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">

      {/* Info */}

      <p className="text-sm text-gray-500">
        Showing <span className="font-semibold text-gray-900">1-8</span> of{" "}
        <span className="font-semibold text-gray-900">36</span> menu items
      </p>

      {/* Controls */}

      <div className="flex items-center gap-2">

        {/* Previous */}

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-gray-200
            bg-white
            transition
            hover:border-[#e8691a]
            hover:text-[#e8691a]
          "
        >
          <FaChevronLeft />
        </button>

        {/* Pages */}

        <button className="h-10 w-10 rounded-lg bg-[#e8691a] font-semibold text-white">
          1
        </button>

        <button
          className="
            h-10
            w-10
            rounded-lg
            border
            border-gray-200
            bg-white
            transition
            hover:border-[#e8691a]
            hover:text-[#e8691a]
          "
        >
          2
        </button>

        <button
          className="
            h-10
            w-10
            rounded-lg
            border
            border-gray-200
            bg-white
            transition
            hover:border-[#e8691a]
            hover:text-[#e8691a]
          "
        >
          3
        </button>

        <span className="px-1 text-gray-400">...</span>

        <button
          className="
            h-10
            w-10
            rounded-lg
            border
            border-gray-200
            bg-white
            transition
            hover:border-[#e8691a]
            hover:text-[#e8691a]
          "
        >
          5
        </button>

        {/* Next */}

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-gray-200
            bg-white
            transition
            hover:border-[#e8691a]
            hover:text-[#e8691a]
          "
        >
          <FaChevronRight />
        </button>

      </div>
    </div>
  );
};

export default Pagination;