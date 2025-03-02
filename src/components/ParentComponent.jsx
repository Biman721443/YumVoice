import React from "react";
import OrderForm from "./OrderForm";

const ParentComponent = () => {
  const handleOrderConfirm = (orderDetails) => {
    console.log("Order Confirmed:", orderDetails);
    alert("Order Confirmed Successfully!");
  };

  return (
    <div>
      <h1>Place Your Order</h1>
      <OrderForm onConfirm={handleOrderConfirm} />
    </div>
  );
};

export default ParentComponent;
