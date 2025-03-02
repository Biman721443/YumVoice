import React, { useState } from "react";
import "../styles/OrderForm.css";

const OrderForm = ({ onConfirm }) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [onlinePaymentOption, setOnlinePaymentOption] = useState("");

  // Handle order confirmation
  const handleConfirm = () => {
    if (!onConfirm || typeof onConfirm !== "function") {
      console.error("onConfirm is not a valid function!");
      return;
    }

    if (!address || !phone || !paymentMethod) {
      alert("Please fill all required fields.");
      return;
    }

    onConfirm({ address, phone, paymentMethod, cardDetails, onlinePaymentOption });
  };

  return (
    <div className="order-form-container">
      <h2>Enter Your Details</h2>

      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
        <option value="">Select Payment Method</option>
        <option value="cod">Cash on Delivery</option>
        <option value="online">Pay Online</option>
        <option value="card">Pay with Card</option>
      </select>

      {paymentMethod === "online" && (
        <select value={onlinePaymentOption} onChange={(e) => setOnlinePaymentOption(e.target.value)}>
          <option value="">Select Online Payment</option>
          <option value="paytm">Paytm</option>
          <option value="phonepe">PhonePe</option>
        </select>
      )}

      {paymentMethod === "card" && (
        <div>
          <input type="text" placeholder="Card Number" value={cardDetails.number} onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })} required />
          <input type="text" placeholder="Expiry Date" value={cardDetails.expiry} onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })} required />
          <input type="text" placeholder="CVV" value={cardDetails.cvv} onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} required />
        </div>
      )}

      <button className="confirm-btn" onClick={handleConfirm}>Confirm Order</button>
    </div>
  );
};

export default OrderForm;
