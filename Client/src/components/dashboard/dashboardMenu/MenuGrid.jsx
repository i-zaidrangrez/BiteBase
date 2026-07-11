import MenuCard from "./MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Burger",
    price: 249,
    stock: "Available",
    sold: 126,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 349,
    stock: "Available",
    sold: 98,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    id: 3,
    name: "Chicken Wrap",
    category: "Chicken",
    price: 199,
    stock: "Low Stock",
    sold: 87,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500",
  },
  {
    id: 4,
    name: "Cold Coffee",
    category: "Drinks",
    price: 149,
    stock: "Out of Stock",
    sold: 64,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
  },
  {
    id: 5,
    name: "French Fries",
    category: "Snacks",
    price: 129,
    stock: "Available",
    sold: 173,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
  },
  {
    id: 6,
    name: "Brownie",
    category: "Desserts",
    price: 179,
    stock: "Available",
    sold: 58,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
  },
];

const MenuGrid = () => {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
      "
    >
      {menuItems.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
};

export default MenuGrid;