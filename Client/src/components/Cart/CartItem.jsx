import React from "react";
import { FaMinus, FaPlus, FaTicketAlt, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/cartSlice";

const CartItem = (props) => {
  const cart = props.Cart;
  const dispatch = useDispatch();
  const handleIncrement = async()=>{ try {
    // let error = null
    await dispatch(
      increaseQuantity({
        menuItemId : props.item.menuItemId,
        userId : cart.userId
      })
    ).unwrap();
  } catch (error) {
    console.log(error);
  }
};
  const handleDecrement = async()=>{ try {
    await dispatch(
      decreaseQuantity({
        menuItemId : props.item.menuItemId,
        userId : cart.userId
      })
    ).unwrap();
  } catch (error) {
    console.log(error);
    error += error
  }
};


  return (
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
                <h2 className="text-xl font-bold">Double Cheese Burger</h2>

                <p className="mt-2 text-gray-500">
                  Juicy grilled beef with cheddar, lettuce, tomato & signature
                  sauce.
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
            <h3 className="text-3xl font-bold text-orange-500">
              {/* ₹199 */}
              ₹{props.item.price}
            </h3>

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
              onClick={handleDecrement}
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

              <span className="text-lg font-semibold">
                {props.item.quantity}
              </span>

              <button
                onClick={handleIncrement}
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
              {/* <div>{error? error : null}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
