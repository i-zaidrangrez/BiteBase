import {
  FaPlus,
  FaClipboardList,
  FaUtensils,
} from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Add Menu Item",
    icon: <FaPlus />,
    to: "/admin/menu/add",
    color: "bg-orange-500",
  },
  {
    title: "Manage Orders",
    icon: <FaClipboardList />,
    to: "/admin/orders",
    color: "bg-green-500",
  },
  {
    title: "Manage Tables",
    icon: <MdTableRestaurant />,
    to: "/admin/tables",
    color: "bg-blue-500",
  },
  {
    title: "Manage Menu",
    icon: <FaUtensils />,
    to: "/admin/menu",
    color: "bg-purple-500",
  },
];

const QuickActions = () => {
  return (
    <section>

      <h2 className="mb-6 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.to}
            className="
              group
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
            <div
              className={`
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                text-2xl
                text-white
                ${action.color}
              `}
            >
              {action.icon}
            </div>

            <h3 className="text-lg font-semibold">
              {action.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Click to continue
            </p>

          </Link>
        ))}

      </div>

    </section>
  );
};

export default QuickActions;