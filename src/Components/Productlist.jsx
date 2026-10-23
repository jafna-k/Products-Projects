
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductList() {
  const products = useSelector(
    (state) => state.products.products
  );

  const dispatch = useDispatch();

  return (
    <section className="bg-gray-100 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Our Products
          </h1>

          <p className="text-gray-500 mt-3">
            Discover our latest products
          </p>

        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {products.map((product) => (

            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden
                         shadow-md hover:shadow-xl
                         transition-all duration-300
                         hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover
                             group-hover:scale-105
                             transition-transform duration-500"
                />

                {/* New Badge */}
                <span
                  className="absolute top-3 left-3
                             bg-black text-white
                             text-xs px-3 py-1
                             rounded-full"
                >
                  New
                </span>

              </div>


              {/* Product Details */}
              <div className="p-5">
            
            {/* Product Name */}
              <h2 className="text-sm font-medium text-gray-700">
               {product.name}
              </h2>

            {/* Small Description */}
            <p className="text-xs text-gray-400 mt-1 truncate">
            {product.description}
            </p>


                {/* Price + Button */}
                <div className="flex justify-between items-center mt-5">

                  <p className="text-xl font-bold text-gray-900">
                    ₹{product.price}
                  </p>

                  <button
                    onClick={() =>
                      dispatch(addToCart(product))
                    }
                    className="bg-black text-white
                               px-4 py-2.5
                               rounded-xl
                               text-sm font-medium
                               hover:bg-gray-800
                               active:scale-95
                               transition-all duration-200"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductList;

