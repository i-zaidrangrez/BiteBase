import React from "react";
import Navbar from "../components/Home/Navbar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaMinus, FaPlus, FaTicketAlt, FaTrashAlt } from "react-icons/fa";

function Cart() {
  return (
    <section className="w-full px-4 py-8 md:px-8 lg:px-12">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Cart <span className="text-orange-500 text-2xl">(3)</span>
          </h1>

          <p className="mt-2 text-gray-500">
            Review your items and proceed to checkout.
          </p>
        </div>

        <button
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-full
          border
          border-gray-300
          bg-white
          px-6
          py-3
          font-medium
          transition-all
          duration-300
          hover:border-orange-500
          hover:text-orange-500
        "
        >
          <IoIosArrowRoundBack />
          Continue Shopping
        </button>
      </div>

      {/* Main Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-[2fr_1fr]">
        {/* Left Side */}
        <div className="space-y-6 ">

          
          {/* Item------------------ */}
          <div
            className="
      rounded-3xl
      flex-col
      gap-5
      p-5
      shadow-sm
      border
      border-gray-100
      transition-all
      duration-300
      hover:shadow-lg
      
    "
          >
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Image */}

              <div className="h-40 w-full overflow-hidden rounded-2xl md:h-36 md:w-44">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                  alt=""
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col justify-between">
                {/* Top */}

                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold">
                        Double Cheese Burger
                      </h2>

                      <p className="mt-2 text-gray-500">
                        Juicy grilled beef with cheddar, lettuce, tomato &
                        signature sauce.
                      </p>
                    </div>

                    <button
                      className="
                rounded-full
                p-2
                text-red-500
                transition
                hover:bg-red-50
              "
                    >
                      <FaTrashAlt />
                    </button>
                  </div>

                  {/* Tags */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600">
                      Burger
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                      Medium
                    </span>
                  </div>
                </div>

                {/* Bottom */}

                <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <h3 className="text-3xl font-bold text-orange-500">₹290</h3>

                  <div
                    className="
              flex
              w-fit
              items-center
              gap-6
              rounded-full
              border
              px-4
              py-2
            "
                  >
                    <button
                      className="
                rounded-full
                bg-gray-100
                p-2
                transition
                hover:bg-orange-500
                hover:text-white
              "
                    >
                      <FaMinus />
                    </button>

                    <span className="text-lg font-semibold">2</span>

                    <button
                      className="
                rounded-full
                bg-orange-500
                p-2
                text-white
                transition
                hover:scale-105
              "
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
    <div
      className="
      sticky
      top-24
      rounded-3xl
      border
      border-gray-100
      bg-white
      p-7
      shadow-sm
    "
    >
      {/* Heading */}

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Review your payment details.
      </p>

      {/* Divider */}

      <div className="my-6 border-b" />

      {/* Prices */}

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-semibold">
            ₹870
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Delivery
          </span>

          <span className="font-semibold">
            ₹40
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Taxes
          </span>

          <span className="font-semibold">
            ₹52
          </span>
        </div>

      </div>

      {/* Divider */}

      <div className="my-6 border-b" />

      {/* Promo */}

      <h3 className="font-semibold">
        Promo Code
      </h3>

      <div className="mt-4 flex">

        <div
          className="
          flex
          flex-1
          items-center
          gap-2
          rounded-l-xl
          border
          border-r-0
          px-4
        "
        >
          <FaTicketAlt
            size={18}
            className="text-orange-500"
          />

          <input
            type="text"
            placeholder="Enter code"
            className="
            w-full
            py-3
            outline-none
          "
          />
        </div>

        <button
          className="
          rounded-r-xl
          bg-orange-500
          px-6
          font-medium
          text-white
          transition
          hover:bg-orange-600
        "
        >
          Apply
        </button>

      </div>

      {/* Divider */}

      <div className="my-7 border-b" />

      {/* Total */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500">
            Total
          </p>

          <h1 className="text-4xl font-bold">
            ₹962
          </h1>

        </div>

        <div
          className="
          rounded-full
          bg-orange-100
          px-4
          py-2
          text-sm
          font-semibold
          text-orange-500
        "
        >
          3 Items
        </div>

      </div>

      {/* Checkout */}

      <button
        className="
        mt-8
        w-full
        rounded-2xl
        bg-orange-500
        py-4
        text-lg
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-orange-600
        hover:shadow-xl
      "
      >
        Proceed to Checkout
      </button>

      {/* Security */}

      <p className="mt-5 text-center text-sm text-gray-400">
        🔒 Secure Checkout • SSL Encrypted
      </p>

    </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
