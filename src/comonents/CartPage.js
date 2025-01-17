import React from "react";
import { motion } from "framer-motion";

const CartPage = ({ cart = [], removeFromCart }) => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center border p-4 rounded-md shadow-md"
            >
              {/* Product Image */}
              <div className="w-1/4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="ml-11 w-3/4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="mt-auto">
                <motion.button
                  whileHover={{ y: 4 }}
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-red-500 hover:underline"
                >
                  Remove
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
