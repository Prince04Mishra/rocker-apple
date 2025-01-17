import React from "react";

const ProductDetailsModal = ({ product, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded">
      <h2 className="text-xl font-bold mb-4">Product Details</h2>
      <p>
        <strong>Title:</strong> {product.title}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <button
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default ProductDetailsModal;
