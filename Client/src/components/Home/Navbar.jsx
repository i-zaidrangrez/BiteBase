import React, { useEffect, useState } from "react";
import logoWider from "/logoWider.png";
import { Link } from "react-router-dom";
import { FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Profile from "./Profile.jsx";

const Navbar = () => {
  const role = localStorage.getItem("role");
  const [navPanel, setNavPanel] = useState(false);
  const [profilePanel, setProfilePanel] = useState(false);
  useEffect(() => {
    if (navPanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navPanel]);
  return (
    <div className="h-1/10 sm:h-1/10 md:h-1/10 lg:h-1/9 lg:bg-white w-full flex items-center px-10 justify-between">
      <div className="w-[15vmax]">
        <img className="h-full" src={logoWider} alt="" />
      </div>
      <div className="h-1/3 w-5/10 p-2 flex border sm:h-1/2 md:w-5/10 lg:w-2/10 items-center rounded-2xl">
        <div className="text-sm sm:text-md">
          <FaSearch />
        </div>
        <input
          className="h-1/2 w-full outline-0 placeholder:font-IMB p-2"
          type="text"
          placeholder="Search Items..."
        />
      </div>
      <div
        onClick={() => {
          setNavPanel(true);
        }}
        className="text-4xl lg:hidden active:rotate-90 duration-300"
      >
        <IoIosMenu />
      </div>

      <div className="hidden font-IMB gap-5 text-2xl sm:hidden md:hidden lg:flex">
        <Link className=" hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-300 px-4 hover:text-[#e8691a]">
          Home
        </Link>
        <Link
          to="/menu"
          className=" hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-300 px-4 hover:text-[#e8691a]"
        >
          Menu
        </Link>
        <Link className=" hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-300 px-4 hover:text-[#e8691a]">
          Orders
        </Link>
        <Link className=" hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-300 px-4 hover:text-[#e8691a]">
          Offers
        </Link>
        {role === "admin" ? (
          <Link className=" hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-300 px-4 hover:text-[#e8691a]">
            Dashboard
          </Link>
        ) : null}
      </div>
      <div className="text-3xl hidden gap-10 items-center py-5 px-2 sm:hidden relative md:hidden lg:flex">
        <div className="h-6 rounded-full left-1/5 w-6 bg-[#e8691a] absolute top-1/5 text-xs flex items-center justify-center text-white">
          3
        </div>
        <Link to="/cart" className="hover:text-[#f79b61] cursor-pointer">
          <FaShoppingCart />
        </Link>
        <div
          onClick={() => {
            if (!profilePanel) {
              setProfilePanel(true);
            } else {
              setProfilePanel(false);
            }
          }}
          className="text-3xl bg-gray-300 hover:bg-gray-200 cursor-pointer p-2 rounded-full"
        >
          <FaRegUser />
        </div>
        {profilePanel ? <Profile /> : null}
      </div>
      <div
        className={`${navPanel ? "translate-x-none overflow-x-clip" : "translate-x-300"} absolute top-0 h-screen right-0 w-full sm:w-5/10 md:w-1/2 flex flex-col font-IMB text-[5vh] gap-2 items-center justify-center text-white bg-[#e8691a] duration-300`}
      >
        <div
          onClick={() => {
            setNavPanel(false);
          }}
          className="h-10 w-10 bg-red-400 absolute top-5 right-5 flex items-center justify-center rounded-full"
        >
          <RxCross2 />
        </div>
        <Link className="py-2 hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-500 px-4 hover:text-[#e8691a]">
          Home
        </Link>
        <Link
          to="/menu"
          className="py-2 hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-500 px-4 hover:text-[#e8691a]"
        >
          Menu
        </Link>
        <Link className="py-2 hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-500 px-4 hover:text-[#e8691a]">
          Orders
        </Link>
        <Link className="py-2 hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-500 px-4 hover:text-[#e8691a]">
          Offers
        </Link>
        {role === "admin" ? (
          <Link className=" hover:border-b-[#e8691a] hover:border-b-5 rounded-3xl duration-300 px-4 hover:text-[#e8691a]">
            Dashboard
          </Link>
        ) : null}
        <div className="text-3xl gap-10 items-center py-5 px-5 place-content-between absolute bottom-0 flex w-full">
          <Link to='/cart' className="hover:text-[#f79b61] cursor-pointer relative p-2">
            <div className="h-6 rounded-full w-6 bg-red-500 absolute top-0 right-0 text-xs flex items-center justify-center text-white">
              3
            </div>
            <FaShoppingCart />
          </Link>
          <div
            onClick={() => {
              if (!profilePanel) {
                setProfilePanel(true);
              } else {
                setProfilePanel(false);
              }
            }}
            className="text-3xl bg-gray-300 hover:bg-gray-200 cursor-pointer p-2 rounded-full"
          >
            <FaRegUser />
          </div>
          {profilePanel ? (
            <Profile navPanel={navPanel} setNavPanel={setNavPanel} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
