import { useState } from "react";
import {
  FaHamburger,
  FaPizzaSlice,
  FaDrumstickBite,
  FaIceCream,
  FaCoffee,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { GiFrenchFries } from "react-icons/gi";

const categories = [
  {
    id: 1,
    name: "All",
    icon: <MdFastfood />,
  },
  {
    id: 2,
    name: "Burger",
    icon: <FaHamburger />,
  },
  {
    id: 3,
    name: "Pizza",
    icon: <FaPizzaSlice />,
  },
  {
    id: 4,
    name: "Chicken",
    icon: <FaDrumstickBite />,
  },
  {
    id: 5,
    name: "Snacks",
    icon: <GiFrenchFries />,
  },
  {
    id: 6,
    name: "Drinks",
    icon: <FaCoffee />,
  },
  {
    id: 7,
    name: "Desserts",
    icon: <FaIceCream />,
  },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="overflow-x-auto scrollbar-hide">

      <div className="flex min-w-max gap-3 pb-2">

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.name)}
            className={`
              flex
              items-center
              gap-2
              rounded-xl
              border
              px-5
              py-3
              font-medium
              transition-all
              duration-300
              whitespace-nowrap

              ${
                activeCategory === category.name
                  ? "bg-[#e8691a] border-[#e8691a] text-white shadow-md"
                  : "bg-white border-gray-200 text-gray-700 hover:border-[#e8691a] hover:text-[#e8691a]"
              }
            `}
          >
            <span className="text-lg">
              {category.icon}
            </span>

            {category.name}
          </button>
        ))}

      </div>

    </div>
  );
};

export default CategoryFilter;