import MenuCard from "./MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Classic Cheese Burger",
    description:
      "Juicy grilled beef patty with cheese, lettuce and tomato.",
    price: 249,
    veg: false,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  },

  {
    id: 2,
    name: "Margherita Pizza",
    description:
      "Classic delight with mozzarella cheese and basil.",
    price: 349,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  },

  {
    id: 3,
    name: "Chicken Wrap",
    description:
      "Grilled chicken wrapped with fresh vegetables.",
    price: 199,
    veg: false,
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800",
  },

  {
    id: 4,
    name: "Peri Peri Fries",
    description:
      "Crispy fries tossed with peri peri seasoning.",
    price: 149,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800",
  },

  {
    id: 5,
    name: "Cold Coffee",
    description:
      "Rich coffee blended with ice cream.",
    price: 99,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
  },

  {
    id: 6,
    name: "Chocolate Brownie",
    description:
      "Warm brownie served with chocolate sauce.",
    price: 129,
    veg: true,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
  },
];

const MenuGrid = () => {
  return (
    <section className="mt-10">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          All Items
        </h2>

        <span className="text-gray-500">
          {menuItems.length} Items
        </span>

      </div>

      <div
        className="
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

    </section>
  );
};

export default MenuGrid;