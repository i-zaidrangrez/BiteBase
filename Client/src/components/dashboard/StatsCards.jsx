import {
  FaIndianRupeeSign,
  FaClipboardList,
  FaUtensils,
  FaUsers,
} from "react-icons/fa6";

const stats = [
  {
    title: "Total Revenue",
    value: "₹1,24,350",
    change: "+12.5%",
    icon: <FaIndianRupeeSign />,
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    title: "Orders",
    value: "356",
    change: "+18%",
    icon: <FaClipboardList />,
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  {
    title: "Menu Items",
    value: "48",
    change: "+4",
    icon: <FaUtensils />,
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    title: "Customers",
    value: "214",
    change: "+9%",
    icon: <FaUsers />,
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
];

const StatsCards = () => {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((card) => (
        <div
          key={card.title}
          className="
            rounded-2xl
            border
            border-gray-100
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                {card.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                {card.value}
              </h2>

              <p className="mt-2 text-sm text-green-600 font-medium">
                {card.change} this month
              </p>
            </div>

            <div
              className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                text-2xl
                ${card.bg}
                ${card.text}
              `}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;