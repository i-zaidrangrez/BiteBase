import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUtensils,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import logo from "/logoWider.png";

const links = [
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

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setSidebarOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          z-40
          duration-300
          lg:hidden

          ${
            sidebarOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-72
          bg-white
          shadow-2xl
          duration-300
          lg:hidden

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-5">

          <img
            src={logo}
            alt=""
            className="h-10"
          />

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              h-10
              w-10
              rounded-full
              bg-gray-100
              hover:bg-red-100
              flex
              items-center
              justify-center
            "
          >
            <RxCross2 className="text-xl" />
          </button>

        </div>

        {/* Links */}

        <div className="mt-6 px-4 space-y-2">

          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-4
                rounded-xl
                px-4
                py-4
                text-lg
                font-medium
                duration-300

                ${
                  isActive
                    ? "bg-[#e8691a] text-white"
                    : "text-gray-700 hover:bg-orange-50 hover:text-[#e8691a]"
                }
              `
              }
            >
              <span className="text-xl">
                {item.icon}
              </span>

              {item.name}
            </NavLink>
          ))}

        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;