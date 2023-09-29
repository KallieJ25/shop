
import React, { useState } from 'react';


function Cart() {
  const [cart, setCart] = useState([]);

  return (
    <div className="cart">
    <h2>Shopping Cart</h2>
    <ul className="cart-list">
      {cart.map((item) => (
        <li key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p className="price">Price: ${item.price}</p>
          <div className="quantity">
            Quantity: {item.quantity}
            <button className="remove">Remove</button>
          </div>
        </li>
      ))}
    </ul>
    <div className="total">
      Total: $0.00{/* Calculate and display the total price */}
    </div>
    <button className="checkout-button">Checkout</button>
  </div>
);
}

export default Cart;
