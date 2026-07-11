import { Link, NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUtensils,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import logo from "/logoWider.png";

const navLinks = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Menu",
    path: "/admin/menu",
    icon: <FaUtensils />,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: <FaClipboardList />,
  },
  {
    name: "Tables",
    path: "/admin/tables",
    icon: <MdTableRestaurant />,
  },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: <FaUsers />,
  },
];

const DashboardSidebar = () => {



  return (
    <aside
      className="
        hidden
        lg:flex
        w-64
        min-h-screen
        bg-white
        border-r
        border-gray-200
        flex-col
      "
    >
      

      {/* Navigation */}

      <nav className="flex-1 px-5 py-8 space-y-2">

        {navLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
              flex
              items-center
              gap-4
              rounded-xl
              px-4
              py-3
              font-medium
              transition-all
              duration-300

              ${
                isActive
                  ? "bg-[#e8691a] text-white shadow-md"
                  : "text-gray-700 hover:bg-orange-50 hover:text-[#e8691a]"
              }
            `
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}

      <div className="border-t border-gray-100 p-5">
        <div className="rounded-xl bg-orange-50 p-4">
          <p className="text-sm text-gray-600">
            BiteBase Admin
          </p>

          <h3 className="font-semibold text-[#e8691a]">
            Restaurant Panel
          </h3>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;