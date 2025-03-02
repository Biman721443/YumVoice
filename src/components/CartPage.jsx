import React, { useState } from "react";
import "../styles/CartPage.css";
import OrderForm from "./OrderForm";

const CartPage = ({ cartItems, removeFromCart }) => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imgUrl} alt={item.item} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.item}</h3>
                <p>By: {item.hotelName}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <p className="cart-rating">⭐ {item.rating}</p>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Total: ₹{totalPrice.toFixed(2)}</h3>
          <button className="order-btn" onClick={() => setShowOrderForm(true)}>Place Order</button>
        </div>
      )}
      {showOrderForm && <OrderForm totalPrice={totalPrice} onClose={() => setShowOrderForm(false)} />}
    </div>
  );
};

export default CartPage;
