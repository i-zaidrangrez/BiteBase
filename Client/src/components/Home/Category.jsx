import React from "react";
import { IoIosMore } from "react-icons/io";

const categories = [
  {
    name: "Burger",
    image:
      "https://static.vecteezy.com/system/resources/previews/078/130/866/non_2x/plasticine-burger-toy-fast-food-model-on-transparent-background-png.png",
  },
  {
    name: "Pizza",
    image:
      "https://static.vecteezy.com/system/resources/previews/078/130/893/non_2x/playful-clay-pizza-slice-toy-on-transparent-background-png.png",
  },
  {
    name: "Chicken",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/057/820/571/small_2x/realistic-toy-chicken-drumstick-on-a-plain-surface-png.png",
  },
  {
    name: "Snacks",
    image:
      "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-french-fries-on-white-bowl-isolated-fried-fast-food-snack-isolated-png-image_10155460.png",
  },
  {
    name: "Beverages",
    image:
      "https://png.pngtree.com/png-vector/20260109/ourmid/pngtree-apple-soda-toy-png-image_18467472.webp",
  },
  {
    name: "Desserts",
    image:
      "https://png.pngtree.com/recommend-works/png-clipart/20250524/ourmid/pngtree-small-cake-toy-frosting-flavor-png-image_16369268.png",
  },
];

const Category = () => {
  return (
    <section className="w-full">
        <h1 className="font-IMB font-semibold px-4 flex items-center justify-center text-[8vmin] text-orange-900 sm:mb-15">Category</h1>
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-3xl
          bg-white
          p-6
          shadow-lg
        "
      >
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => (
            <button
              key={category.name}
              className="
                group
                flex
                flex-col
                items-center
                gap-4
                rounded-2xl
                p-4
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-orange-50
              "
            >
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-orange-100
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-14 w-14 object-contain"
                />
              </div>

              <span className="text-sm font-semibold text-gray-800 md:text-base">
                {category.name}
              </span>
            </button>
          ))}

          <button
            className="
              group
              flex
              flex-col
              items-center
              gap-4
              rounded-2xl
              p-4
              transition-all
              duration-300
              hover:-translate-y-2
              hover:bg-orange-50
            "
          >
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-orange-100
                text-3xl
                text-orange-500
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              <IoIosMore />
            </div>

            <span className="text-sm font-semibold text-gray-800 md:text-base">
              More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;