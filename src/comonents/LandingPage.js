import React, { useState } from "react";
import Carousel from "./Carousel";
import SearchAndFilter from "./SearchAndFilter";
import useProductManagement from "../hooks/useProductManagement";
import useFetchProducts from "../hooks/useFetchProducts";

import { motion } from "framer-motion";
import { API_URL } from "../constrains/constrains";

const LandingPage = ({ addToCart }) => {
  const { products, setProducts, isLoading, error } = useFetchProducts(API_URL);
  const {
    searchTerm,
    setSearchTerm,
    filterCategory,
    setFilterCategory,
    filteredProducts,
  } = useProductManagement(products, setProducts);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate paginated products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle Next and Previous
  const handleNext = () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      {/* Carousel Section */}
      <Carousel />

      {/* Welcome Section */}
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to AppleRocket</h1>
        <p className="text-lg text-gray-600">
          "We’re glad you’re here! Shop quality, style, and value under one
          roof." Start exploring and let us make your shopping extraordinary.
        </p>
      </div>

      {/* Product Search and Filter */}
      <div className="flex flex-col items-center px-4 py-6">
        <SearchAndFilter
          searchTerm={searchTerm}
          filterCategory={filterCategory}
          products={products}
          onSearchChange={setSearchTerm}
          onCategoryChange={setFilterCategory}
        />
      </div>

      {/* Product Cards Section */}
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        {isLoading && <p>Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!isLoading &&
            !error &&
            currentProducts.map((product) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={product.id}
                className="border cursor-pointer rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4 "
                />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description.substring(0, 60)}...
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-green-700">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-yellow-500">
                    ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
                  </span>
                </div>
                <motion.button
                  whileHover={{ y: 4 }}
                  onClick={() => addToCart(product)}
                  className="bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <motion.button
            whileHover={{ y: 4 }}
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-700 text-white"
            }`}
          >
            Previous
          </motion.button>
          <span className="text-lg font-semibold">
            Page {currentPage} of{" "}
            {Math.ceil(filteredProducts.length / itemsPerPage)}
          </span>
          <motion.button
            whileHover={{ y: 4 }}
            onClick={handleNext}
            disabled={
              currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
            }
            className={`px-4 py-2 rounded-lg ${
              currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-700 text-white "
            }`}
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
