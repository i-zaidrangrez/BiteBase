const popularItems = [
  {
    id: 1,
    name: "Classic Burger",
    sold: 326,
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    sold: 281,
    price: "₹349",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  },
  {
    id: 3,
    name: "Chicken Wrap",
    sold: 214,
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
  },
  {
    id: 4,
    name: "Cold Coffee",
    sold: 187,
    price: "₹99",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
  },
];

const PopularItems = () => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Popular Items
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Best selling dishes this month
        </p>
      </div>

      <div className="space-y-5">
        {popularItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-14 w-14 rounded-xl object-cover"
            />

            <div className="flex-1">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-gray-900">
                  {item.name}
                </h3>

                <span className="font-bold text-[#e8691a]">
                  {item.price}
                </span>

              </div>

              <p className="mt-1 text-sm text-gray-500">
                {item.sold} sold
              </p>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#e8691a]"
                  style={{
                    width: `${Math.min(item.sold / 3.5, 100)}%`,
                  }}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;