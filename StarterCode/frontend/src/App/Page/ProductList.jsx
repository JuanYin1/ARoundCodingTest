import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const getlink = 'http://localhost:3000/api/products';
  const deletelink = 'http://localhost:3000/api/products/';


  //implement the get products function
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await fetch(getlink)
        if (!response.ok) {
          throw new Error(`Failed to fetch products with response ${response}`);
        }
        const productData = await response.json();
        if (productData.length > 0) {
          setProducts(productData);
        }
      } catch(error) {
        setError(error.message);
      }
      
    };

    fetchProducts();
  },[]);

  //implement the delete function

  const handleDelete = async (id) => {
    try {
      const response = await fetch(deletelink+`${id}`, {method: 'DELETE'});
      if (!response.ok) {
        throw new Error(`Product with id=${id} not found`);
      }
      setProducts(products.filter(product => product.id !== id));
      console.log(`Product with id=${id} deleted.`);
    } catch (error) {
      setError(`Can not find the product with id=${id}`);
    }
  };


    

  return (
    <div>
    <div class="header">
      <h1>Product List</h1>
    </div>
    {error && <p>Error: {error}</p>}

      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;