import { FaCircle } from "react-icons/fa";

const orders = [
  {
    id: "#ORD-1024",
    customer: "Aarav Sharma",
    items: "2x Burger, 1x Fries",
    amount: "₹648",
    status: "Preparing",
  },
  {
    id: "#ORD-1025",
    customer: "Priya Patel",
    items: "1x Pizza",
    amount: "₹349",
    status: "Delivered",
  },
  {
    id: "#ORD-1026",
    customer: "Rahul Verma",
    items: "3x Wrap",
    amount: "₹597",
    status: "Pending",
  },
  {
    id: "#ORD-1027",
    customer: "Sneha Gupta",
    items: "2x Coffee",
    amount: "₹198",
    status: "Preparing",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "text-green-600 bg-green-100";

    case "Preparing":
      return "text-orange-600 bg-orange-100";

    case "Pending":
      return "text-red-600 bg-red-100";

    default:
      return "text-gray-600 bg-gray-100";
  }
};

const RecentOrders = () => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest customer orders
          </p>
        </div>

        <button className="rounded-lg border px-4 py-2 text-sm hover:bg-orange-50">
          View All
        </button>
      </div>

      <div className="space-y-4">

        {orders.map((order) => (
          <div
            key={order.id}
            className="
              flex
              flex-col
              gap-4
              rounded-xl
              border
              border-gray-100
              p-4
              transition
              hover:bg-gray-50
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <h3 className="font-semibold">
                {order.id}
              </h3>

              <p className="text-sm text-gray-600">
                {order.customer}
              </p>

              <p className="text-sm text-gray-400">
                {order.items}
              </p>
            </div>

            <div className="flex items-center gap-6">

              <span className="font-bold text-[#e8691a]">
                {order.amount}
              </span>

              <div
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-3
                  py-1
                  text-sm
                  ${getStatusColor(order.status)}
                `}
              >
                <FaCircle className="text-[8px]" />

                {order.status}
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default RecentOrders;