  export const applySelectedPricesFilter = (data, selectedPrices) => {
  const [minPrice, maxPrice] = selectedPrices;

  if (minPrice === 1 && maxPrice === 100) {
    return data;
  }
  return data.filter((element) => {
    const hotelPrice = (element?.net_price); 
    return hotelPrice >= minPrice*100 && hotelPrice <= maxPrice*1000;
  });
};


export const applyStarRatingFilter = (data, selectedStarRatings) => {
  return selectedStarRatings.length === 0
    ? data
    : data.filter((hotel) =>
        selectedStarRatings?.includes(Math.ceil(hotel.starrating))
      );
};

 export const applyBoardTypeFilter = (data, selectedBoardTypes) => {
  return selectedBoardTypes?.length === 0
    ? data
    : data?.filter((hotel) =>
        selectedBoardTypes?.some((type) => hotel.roomcode.includes(type))
      );
};


export const applyLocationFilter = (data, selectedLocations) => {
  return selectedLocations.length === 0
    ? data
    : data?.filter((hotel) =>
        selectedLocations?.some((location) =>
          hotel?.zonecode?.includes(location)
        )
      );
};
