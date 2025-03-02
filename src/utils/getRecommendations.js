const getRecommendations = (query, allRestaurants) => {
    return allRestaurants
      .filter((restaurant) =>
        restaurant.menu.some((item) =>
          item.item.toLowerCase().includes(query.toLowerCase())
        )
      )
      .flatMap((restaurant) =>
        restaurant.menu
          .filter((item) => item.item.toLowerCase().includes(query.toLowerCase()))
          .map((item) => ({
            ...item,
            hotelName: restaurant.hotelName,
            imgUrl: item.imgUrl || "https://via.placeholder.com/100", // Placeholder image
          }))
      )
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  };
  
  export default getRecommendations;