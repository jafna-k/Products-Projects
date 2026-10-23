import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart({ setShowCart }) {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-6xl mx-auto px-6">

        {/* Back Button */}
        <button
          onClick={() => setShowCart(false)}
          className="mb-8 flex items-center gap-2
                     text-sm font-medium text-gray-600
                     hover:text-black transition"
        >
          ← Back to Products
        </button>


        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            Review your selected products
          </p>
        </div>


        {cartItems.length === 0 ? (

          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-sm
                          p-16 text-center">

            <div className="text-6xl mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>

            <button
              onClick={() => setShowCart(false)}
              className="mt-6 bg-black text-white
                         px-6 py-3 rounded-xl
                         hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          /* Cart */
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5
                             shadow-sm
                             flex items-center gap-5
                             hover:shadow-md
                             transition"
                >

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28
                               object-cover rounded-xl"
                  />


                  {/* Product Details */}
                  <div className="flex-1">

                    <h2 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>

                    <p className="text-lg font-semibold mt-3">
                      ₹{item.price}
                    </p>

                  </div>


                  {/* Remove */}
                  <button
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                    className="text-red-500
                               border border-red-200
                               px-4 py-2 rounded-lg
                               text-sm font-medium
                               hover:bg-red-500
                               hover:text-white
                               transition"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>


            {/* Order Summary */}
            <div className="bg-white rounded-2xl
                            shadow-sm p-6 h-fit">

              <h2 className="text-xl font-bold mb-6">
                Order Summary
              </h2>


              <div className="flex justify-between
                              text-gray-500 mb-4">
                <span>Items</span>

                <span>
                  {cartItems.length}
                </span>
              </div>


              <div className="border-t pt-4
                              flex justify-between
                              text-lg font-bold">

                <span>Total</span>

                <span>
                  ₹{totalPrice}
                </span>

              </div>


              <button
                className="w-full bg-black
                           text-white py-3
                           rounded-xl mt-6
                           font-medium
                           hover:bg-gray-800
                           active:scale-95
                           transition"
              >
                Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Cart;