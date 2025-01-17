import React from "react";
import { motion } from "framer-motion";

const ProductTable = ({ products, onView, onUpdate, onDelete }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2 text-sm sm:text-base">Title</th>
          <th className="border p-2 text-sm sm:text-base hidden sm:table-cell">
            Price
          </th>
          <th className="border p-2 text-sm sm:text-base hidden sm:table-cell">
            Description
          </th>
          <th className="border p-2 text-sm sm:text-base hidden md:table-cell">
            Category
          </th>
          <th className="border p-2 text-sm sm:text-base">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <motion.tr
            key={product.id}
            className="hover:bg-gray-50 items-center text-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.008 }} // Apply zoom effect on hover
          >
            <td className="border p-2 text-sm sm:text-base">{product.title}</td>
            <td className="border p-2 text-sm sm:text-base hidden sm:table-cell">
              ${product.price}
            </td>
            <td className="border p-2 text-sm sm:text-base hidden sm:table-cell font-thin">
              {product.description}
            </td>
            <td className="border p-2 text-sm sm:text-base hidden md:table-cell">
              {product.category}
            </td>
            <td className="border p-2 text-sm sm:text-base flex justify-center space-x-2 sm:space-x-4">
              {/* Use icons for mobile */}
              <motion.button
                whileHover={{ y: 4 }}
                className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded "
                onClick={() => onView(product)}
              >
                <span className="hidden sm:inline">View</span>
                <i className="sm:hidden material-icons">visibility</i>
              </motion.button>
              <motion.button
                whileHover={{ y: 4 }}
                className="bg-green-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded"
                onClick={() => onUpdate(product)}
              >
                <span className="hidden sm:inline">Update</span>
                <i className="sm:hidden material-icons">edit</i>
              </motion.button>
              <motion.button
                whileHover={{ y: 4 }}
                className="bg-red-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded"
                onClick={() => onDelete(product.id)}
              >
                <span className="hidden sm:inline">Delete</span>
                <i className="sm:hidden material-icons">delete</i>
              </motion.button>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
