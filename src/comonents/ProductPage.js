import React from "react";
import SearchAndFilter from "./SearchAndFilter";
import ProductTable from "./ProductTable";
import ProductDetailsModal from "./ProductDetailsModal";
import EditProductModal from "./EditProductModal";
import useProductManagement from "../hooks/useProductManagement";
import useFetchProducts from "../hooks/useFetchProducts";
import { API_URL } from "../constrains/constrains";

const ProductPage = ({ user }) => {
  const { products, setProducts, isLoading, error } = useFetchProducts(API_URL);
  const {
    searchTerm,
    filterCategory,
    filteredProducts,
    selectedProduct,
    isEditing,
    editProduct,
    setSearchTerm,
    setFilterCategory,
    handleView,
    handleUpdate,
    handleDelete,
    handleEditSubmit,
    setSelectedProduct,
    setIsEditing,
  } = useProductManagement(products, setProducts);

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Products</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <>
          <SearchAndFilter
            searchTerm={searchTerm}
            filterCategory={filterCategory}
            products={products}
            onSearchChange={setSearchTerm}
            onCategoryChange={setFilterCategory}
          />
          <ProductTable
            products={filteredProducts}
            onView={handleView}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
          {selectedProduct && (
            <ProductDetailsModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
          {isEditing && (
            <EditProductModal
              product={editProduct}
              onSubmit={handleEditSubmit}
              onClose={() => setIsEditing(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductPage;
