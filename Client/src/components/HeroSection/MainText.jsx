import React from "react";
import { FaArrowRight } from "react-icons/fa";

const MainText = () => {
  return (
    <div className="flex flex-col gap-5 justify-between">
      <div className="font-IMB text-[3vmin] rounded-full bg-[#feefe3] text-[#e8691a]">
        Fast Delivery &middot; Best Quality &middot; Great Prices
      </div>
      <div className="h-4/10 w-full">
        <h1 className="w-full font-IMB text-[clamp(3rem,7vw,6rem)] leading-[1.05]">
          Delicious Food, <br />
          <span className="text-[#e8691a]">Delivered</span> To You
        </h1>
      </div>
      <div className="text-[clamp(1rem,2vw,1.35rem)] w-full font-IMB">
        <p>
          Discover your favorite meals, delivered hot and fresh to your
          doorstep.
        </p>
      </div>
      <div className="flex flex-col gap-4 h-[30vmin]">
        <button className="bg-[#e8691a] text-white flex items-center justify-center font-IMB gap-5 py-4 rounded-3xl focus:ring-2 ring-orange-400 focus:outline-0 text-lg font-semibold hover:bg-[#cf5c14] hover:-translate-y-1 cursor-pointer hover:shadow-xl transition-all duration-300">
          Order Now <FaArrowRight />
        </button>
        <button className="border border-gray-300 flex items-center justify-center font-IMB gap-5 py-4 rounded-3xl focus:ring-2 ring-orange-400 focus:outline-0 text-lg font-semibold hover:border-[#e8691a] hover:text-[#e8691a] cursor-pointer hover:bg-orange-50">
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default MainText;
