import { useState, useEffect } from "react";

const useFetchProducts = (apiUrl) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl);
        const { collection } = await response.json();
        const productsUrl = collection?.item?.find(
          (item) => item.name === "Get All Products"
        )?.request?.url?.raw;

        if (productsUrl) {
          const productsResponse = await fetch(productsUrl);
          const data = await productsResponse.json();
          console.log(data);
          setProducts(data || []);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  return { products, setProducts, isLoading, error };
};

export default useFetchProducts;
