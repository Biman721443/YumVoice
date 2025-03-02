import React, { useState } from "react";
import "../styles/HomePage.css";

const HomePage = ({ hotels, addToCart }) => {  // ✅ Receive addToCart
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div className="home-container">
      <section className="offer-section">
        <h2>Special Offers 🎉</h2>
        <p>Get up to 50% off on top-rated hotels! Book now.</p>
      </section>

      {/* Hotel Listings */}
      <section className="hotels-section">
        <h2>Top Hotels 🏨</h2>
        <div className="hotels-grid">
          {hotels.length === 0 ? (
            <p>No hotels available</p>
          ) : (
            hotels.map((hotel, index) => (
              <div key={index} className="hotel-card">
                <img src={hotel.hotelImgUrl} alt={hotel.hotelName} className="hotel-image" />
                <h3>{hotel.hotelName}</h3>
                <p>📍 {hotel.locationName}</p>
                <p>⭐ {hotel.hotelsRating}</p>
                <button className="view-menu-btn" onClick={() => setSelectedHotel(hotel)}>
                  View Menu 🍽️
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Menu Section */}
      {selectedHotel && (
        <section className="menu-section">
          <h2>{selectedHotel.hotelName} - Menu 🍽️</h2>
          <button className="close-btn" onClick={() => setSelectedHotel(null)}>❌ Close</button>
          <div className="menu-grid">
            {selectedHotel.menu.map((item, index) => (
              <div key={index} className="menu-card">
                <img src={item.imgUrl} alt={item.item} className="menu-image" />
                <h3>{item.item}</h3>
                <p> ₹{item.price}</p>
                <p>⭐ {item.rating}</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart({ ...item, hotelName: selectedHotel.hotelName })} // ✅ Add item to cart
                >
                  Add to Cart 🛒
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
