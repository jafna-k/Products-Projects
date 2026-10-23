
import React from "react";
import { useSelector } from "react-redux";

function Header({ setShowCart }) {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  return (
    <header className="bg-white border-b border-gray-200
                       sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8
                      h-20 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-extrabold
                         tracking-tight text-gray-900">
            My<span className="text-gray-500">Shop</span>
          </h1>

          <p className="text-[10px] uppercase
                        tracking-[0.25em] text-gray-400">
            Shop with style
          </p>
        </div>


        {/* Cart Button */}
        <button
          onClick={() => setShowCart(true)}
          className="relative flex items-center gap-2
                     bg-black text-white
                     px-5 py-2.5
                     rounded-xl
                     text-sm font-medium
                     hover:bg-gray-800
                     active:scale-95
                     transition-all duration-200"
        >

          {/* Cart Icon */}
          <span className="text-lg">
            🛒
          </span>

          <span>
            Cart
          </span>


          {/* Cart Count */}
          {cartItems.length > 0 && (
            <span
              className="absolute -top-2 -right-2
                         min-w-6 h-6 px-1
                         flex items-center justify-center
                         bg-red-500 text-white
                         text-xs font-bold
                         rounded-full
                         border-2 border-white"
            >
              {cartItems.length}
            </span>
          )}

        </button>

      </div>

    </header>
  );
}

export default Header;

