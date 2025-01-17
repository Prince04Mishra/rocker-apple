import React, { useState } from "react";
import { motion } from "framer-motion";

const EditProductModal = ({ product, onSubmit, onClose }) => {
  const [editProduct, setEditProduct] = useState(product);

  const handleChange = (field, value) => {
    setEditProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editProduct);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <form className="bg-white p-6 rounded" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
        <motion.input
          className="border p-2 mb-4 w-full rounded-lg"
          value={editProduct.title}
          onChange={(e) => handleChange("title", e.target.value)}
          whileHover={{ scale: 1.03 }}
          placeholder="Title"
        />
        <motion.input
          className="border p-2 mb-4 w-full rounded-lg"
          type="number"
          value={editProduct.price}
          onChange={(e) => handleChange("price", e.target.value)}
          whileHover={{ scale: 1.03 }}
          placeholder="Price"
        />
        <motion.textarea
          className="border p-2 mb-4 w-full rounded"
          value={editProduct.description}
          onChange={(e) => handleChange("description", e.target.value)}
          whileHover={{ scale: 1.03 }}
          placeholder="Description"
        />
        <motion.button
          whileHover={{ y: 4 }}
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Save
        </motion.button>
        <motion.button
          whileHover={{ y: 4 }}
          className="bg-red-500 text-white px-4 py-2 ml-4 rounded-lg"
          onClick={onClose}
        >
          Cancel
        </motion.button>
      </form>
    </div>
  );
};

export default EditProductModal;
