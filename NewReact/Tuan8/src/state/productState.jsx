import { useState, useEffect, useCallback } from 'react';
import { ProductContext } from './context/ProductContext';

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const posts = await response.json();
      
      // Transform posts thành products
      const products = posts.map((post, index) => ({
        id: post.id,
        name: `Product ${post.id}`,
        title: post.title,
        description: post.body,
        price: (Math.random() * 100 + 10).toFixed(2),
        image: `https://via.placeholder.com/200?text=Product${post.id}`,
        category: ['Electronics', 'Clothing', 'Books'][index % 3],
        inStock: Math.random() > 0.3,
      }));

      setProducts(products);
    } catch (err) {
      setError(err.message || 'Lỗi khi tải sản phẩm');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch products khi component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    products,
    isLoading,
    error,
    refetch: fetchProducts,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
