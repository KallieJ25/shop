
import React, { useState, useEffect } from 'react';


function ProductDetail({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    fetch(`https://fakestoreapi.com/products/${match.params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [match.params.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="description">{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
