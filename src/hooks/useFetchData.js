import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const url = "https://yummyvoice-2f35e-default-rtdb.firebaseio.com/hotels.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setRestaurants(Object.values(response.data)); // Convert object to array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return restaurants;
};

export default useFetchData;

