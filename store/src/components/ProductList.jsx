
import React, { useState, useEffect } from 'react';


function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
    <h2>Product List</h2>
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default ProductList;
