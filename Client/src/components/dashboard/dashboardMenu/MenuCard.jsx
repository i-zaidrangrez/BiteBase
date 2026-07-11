import { FaEdit, FaTrash } from "react-icons/fa";

const getStatusStyle = (status) => {
  switch (status) {
    case "Available":
      return "bg-green-100 text-green-700";

    case "Low Stock":
      return "bg-yellow-100 text-yellow-700";

    case "Out of Stock":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

const MenuCard = ({ item }) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="relative h-52 overflow-hidden">

        <img
          src={item.image}
          alt={item.name}
          className="
            h-full
            w-full
            object-cover
            duration-500
            hover:scale-110
          "
        />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-black/70
            px-3
            py-1
            text-xs
            font-semibold
            text-white
          "
        >
          {item.category}
        </span>

      </div>

      {/* Content */}

      <div className="space-y-4 p-5">

        <div>

          <div className="flex items-start justify-between">

            <h2 className="text-xl font-bold text-gray-900">
              {item.name}
            </h2>

            <p className="text-xl font-bold text-[#e8691a]">
              ₹{item.price}
            </p>

          </div>

        </div>

        {/* Status */}

        <div className="flex items-center justify-between">

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-sm
              font-medium
              ${getStatusStyle(item.stock)}
            `}
          >
            {item.stock}
          </span>

          <p className="text-sm text-gray-500">
            {item.sold} Sold
          </p>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-100"></div>

        {/* Actions */}

        <div className="grid grid-cols-2 gap-3">

          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-orange-100
              py-3
              font-semibold
              text-orange-600
              transition
              hover:bg-[#e8691a]
              hover:text-white
            "
          >
            <FaEdit />

            Edit
          </button>

          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-red-100
              py-3
              font-semibold
              text-red-600
              transition
              hover:bg-red-500
              hover:text-white
            "
          >
            <FaTrash />

            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default MenuCard;