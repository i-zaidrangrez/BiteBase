import {
  FaBorderAll,
  FaHamburger,
  FaPizzaSlice,
  FaDrumstickBite,
  FaGlassWhiskey,
  FaIceCream,
} from "react-icons/fa";

const categories = [
  {
    name: "All",
    icon: FaBorderAll,
  },
  {
    name: "Burgers",
    icon: FaHamburger,
  },
  {
    name: "Pizzas",
    icon: FaPizzaSlice,
  },
  {
    name: "Snacks",
    icon: FaDrumstickBite,
  },
  {
    name: "Beverages",
    icon: FaGlassWhiskey,
  },
  {
    name: "Desserts",
    icon: FaIceCream,
  },
];

const CategoryTabs = () => {
  const activeCategory = "All";

  return (
    <section className="mt-8">
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-4
          shadow-sm
          scrollbar-hide
        "
      >
        {categories.map((category) => {
          const Icon = category.icon;

          const active = category.name === activeCategory;

          return (
            <button
              key={category.name}
              className={`
                flex
                min-w-fit
                items-center
                gap-3
                rounded-xl
                px-5
                py-3
                font-medium
                transition-all
                duration-300

                ${
                  active
                    ? "bg-orange-50 text-[#e8691a]"
                    : "hover:bg-orange-50 text-gray-700"
                }
              `}
            >
              <div
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full

                  ${
                    active
                      ? "bg-[#e8691a] text-white"
                      : "bg-orange-100 text-[#e8691a]"
                  }
                `}
              >
                <Icon />
              </div>

              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryTabs;