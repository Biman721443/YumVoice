import React from "react";
import "../styles/RestaurantsList.css";

const RestaurantsList = ({ restaurants, addToCart }) => {
  return (
    <div className="restaurant-grid">
      {restaurants.length === 0 ? (
        <p className="no-items"></p>
      ) : (
        restaurants.map((item, index) => (
          <div key={index} className="restaurant-card">
            <img src={item.imgUrl} alt={item.item} className="restaurant-image" />
            <div className="restaurant-info">
              <h2 className="restaurant-item">{item.item}</h2>
              <p className="restaurant-hotel">By: {item.hotelName}</p>
              <p className="restaurant-price">Price: ₹{item.price.toFixed(2)}</p>
              <p className="restaurant-rating">⭐ {item.rating}</p>
              <button className="add-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantsList;


