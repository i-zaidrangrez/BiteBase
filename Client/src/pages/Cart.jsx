import React, { useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaMinus, FaPlus, FaTicketAlt, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/cartSlice";
import CartItem from "../components/Cart/CartItem.jsx";

function Cart() {

  const dispatch = useDispatch()
  
  const Cart =  useSelector(state => state.cart)
  const  {user}  = useSelector((state) => state.auth);
  // console.log(user)
  const userId = localStorage.getItem('userId')
  let deliveryCharge = 0
  if(Cart.cart.items.length === 0){
    deliveryCharge = 0
  }else{
    deliveryCharge = 40
  }

useEffect(() => {
  const getItems = async () => {
    try {
      // if (!user?.id) return;
      const result = await dispatch(
            getCart(
              { userId: userId }
            )
          ).unwrap();
          console.log(result.cart.items.length)
          console.log(result)
    } catch (error) {
      console.log(error)
    }
      };
      getItems()
}, [dispatch,user]);
console.log(Cart.cart.items)


  return (
    <section className="w-full px-4 py-8 md:px-8 lg:px-12">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Cart <span className="text-orange-500 text-2xl">({Cart.cart.items.length})</span>
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
          {/* <CartItem /> */}
          {Cart.cart.items.map((item , idx)=>{
           return <CartItem key={idx} item={item} Cart = {Cart.cart}/> 
          })}
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
            ₹{Cart.cart.totalCartPrice}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Delivery
          </span>

          <span className="font-semibold">
            ₹{deliveryCharge}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Taxes
          </span>

          <span className="font-semibold">
            ₹{Math.round(Cart.cart.totalCartPrice*0.02)}
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
            ₹{Cart.cart.totalCartPrice + Math.round(Cart.cart.totalCartPrice*0.02) + deliveryCharge}
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
          {Cart.cart.items.length} Items
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
