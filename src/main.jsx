
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import "./styles/OrderForm.css";

// createRoot(document.getElementById('root')).render(

//     <App />
  
// )


import React from "react";
import { createRoot } from 'react-dom/client'
// import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/OrderForm.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
