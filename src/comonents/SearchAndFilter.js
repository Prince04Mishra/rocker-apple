import React from "react";
import { motion } from "framer-motion";

const SearchAndFilter = ({
  searchTerm,
  filterCategory,
  products,
  onSearchChange,
  onCategoryChange,
}) => {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="mb-4">
      <motion.input
        type="text"
        placeholder="Search by title"
        className="p-2 border rounded-lg w-1/2 mr-4"
        whileHover={{ scale: 1.03 }}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <motion.select
        whileHover={{ scale: 1.03 }}
        className="p-2 border rounded-lg"
        value={filterCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </motion.select>
    </div>
  );
};

export default SearchAndFilter;
