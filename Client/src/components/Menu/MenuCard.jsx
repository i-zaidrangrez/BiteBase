import { FaBookmark, FaLeaf } from "react-icons/fa";

const MenuCard = ({ item }) => {
  return (
    <div
      className="
      group
      rounded-2xl
      bg-white
      border
      border-gray-100
      shadow-sm
      overflow-hidden
      hover:shadow-xl
      hover:-translate-y-1
      duration-300
    "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="
            h-52
            w-full
            object-cover
            duration-500
            group-hover:scale-110
          "
        />

        <button
          className="
            absolute
            top-3
            right-3
            h-9
            w-9
            rounded-full
            bg-white/90
            backdrop-blur
            flex
            items-center
            justify-center
            hover:bg-[#e8691a]
            hover:text-white
            duration-300
          "
        >
          <FaBookmark />
        </button>
      </div>

      {/* Body */}

      <div className="p-4">

        <div className="flex justify-between items-start">

          <h3 className="font-bold text-lg">
            {item.name}
          </h3>

          {item.veg && (
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <FaLeaf />
              Veg
            </div>
          )}

        </div>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {item.description}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="font-bold text-2xl">
            ₹{item.price}
          </span>

          <button
            className="
              rounded-lg
              bg-[#e8691a]
              px-5
              py-2
              text-white
              hover:bg-orange-600
              duration-300
            "
          >
            Add
          </button>

        </div>

      </div>
    </div>
  );
};

export default MenuCard;