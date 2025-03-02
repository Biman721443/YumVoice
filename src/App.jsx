import { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import RestaurantsList from "./components/RestaurantsList";
import CartPage from "./components/CartPage";
import getRecommendations from "./utils/getRecommendations";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { getUser } from "./Services/authServices"; // ✅ Import authentication helper
import Footer from "./components/Footer";

const App = () => {
  const allData = useFetchData(); // ✅ Fetch data once instead of twice
  const [recommended, setRecommended] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState(getUser()); // ✅ Get user from localStorage

  const handleRecommendations = (query) => {
    const results = getRecommendations(query, allData);
    setRecommended(results);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <Navbar 
        user={user} 
        setUser={setUser} 
        handleRecommendations={handleRecommendations} 
        setShowCart={setShowCart} 
      /> 
      {!showCart ? (  
        <>
          <HomePage hotels={allData} addToCart={addToCart} />
          <RestaurantsList restaurants={recommended} addToCart={addToCart} />
        </>
      ) : (
        <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
      )}
      <Footer/>
    </div>
  );
};

export default App;
