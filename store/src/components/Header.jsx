import React from 'react';


function Header() {
    return (
      <header className="header">
        <div className="logo">My E-Commerce Store</div>
        <nav>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/checkout">Checkout</a></li>
          </ul>
        </nav>
        <div className="cart-icon">
          <span className="badge">0</span>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </header>
    );
  }
  
  export default Header;