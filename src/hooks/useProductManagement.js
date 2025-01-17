import { useState } from "react";

const useProductManagement = (products, setProducts) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleView = (product) => setSelectedProduct(product);

  const handleUpdate = (product) => {
    setIsEditing(true);
    setEditProduct({ ...product });
  };

  const handleDelete = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleEditSubmit = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setIsEditing(false);
    setEditProduct(null);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory
      ? product.category === filterCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return {
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
  };
};

export default useProductManagement;
