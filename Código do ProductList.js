import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import CartContext from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = React.useState([]);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
