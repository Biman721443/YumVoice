



import { FaSearch, FaMicrophone, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutUser, getUser } from "../Services/authServices";
import Login from "../components/Login";
import Register from "../components/Register";
import "../styles/Navbar.css";

const Navbar = ({ setUser, handleRecommendations, setShowCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setLocalUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    const loggedInUser = getUser();
    if (loggedInUser) {
      setLocalUser(loggedInUser);
      setUser(loggedInUser);
    }
  }, [setUser]);

  const startVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      setSearchQuery(transcript);
      handleRecommendations(transcript);
    };

    recognition.start();
  };

  const handleTextSearch = () => {
    handleRecommendations(searchQuery);
  };

  const handleLogout = () => {
    logoutUser();
    setLocalUser(null);
    setUser(null);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">
          <Link to="/">YumVoice🍽</Link>
        </h1>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleTextSearch}><FaSearch /></button>
          <button className="navbar-mic" onClick={startVoiceSearch}>
            <FaMicrophone />
          </button>
        </div>

        <div className="navbar-right">
          <FaShoppingCart className="navbar-cart" onClick={() => setShowCart((prev) => !prev)} />
          {user ? (
            <>
              <span className="text-gray-300">Hello, {user.name}</span>
              <button className="auth-btn logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="auth-btn" onClick={() => { setIsRegister(false); setIsModalOpen(true); }}>Login</button>
              <button className="auth-btn" onClick={() => { setIsRegister(true); setIsModalOpen(true); }}>Register</button>
            </>
          )}
        </div>
      </nav>

      {/* Modal for Login/Register */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>×</button>
            {isRegister ? <Register setUser={setUser} /> : <Login setUser={setUser} />}
            <p className="toggle-auth">
              {isRegister ? (
                <>
                  Already have an account? <button onClick={() => setIsRegister(false)}>Login</button>
                </>
              ) : (
                <>
                  Don't have an account? <button onClick={() => setIsRegister(true)}>Register</button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
