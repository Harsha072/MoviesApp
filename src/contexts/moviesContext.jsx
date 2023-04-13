import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [favouritesSeries, setFavouritesSeries] = useState([]);
const [myReviews, setMyReviews] = useState( {} )
const [myReviewsSeries, setMyReviewsSeries] = useState( {} )
const [knowFor, setKnownFor] = useState( {} )

  const addToFavourites = (movie) => {
    console.log("added")
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    console.log("favvvvvv ",updatedFavourites)
    setFavourites(updatedFavourites);
  };

  const addToFavouritesSeies = (movie) => {
    console.log("added series")
    let updatedFavourites = [...favouritesSeries];
    if (!favouritesSeries.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    console.log("favvvvvv series ",updatedFavourites)
    setFavouritesSeries(updatedFavourites);
  };

  const setKnown = (movie) => {
    console.log("added set ", movie.known_for)
    
      setKnownFor({...knowFor, movie});
    
    console.log("added setjhg ", knowFor)
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };
  const addReview = (movie, review) => {  
     // NEW
     console.log("got reive context ",)
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const removeFromFavouritesSeries = (movie) => {
    setFavouritesSeries(favourites.filter((mId) => mId !== movie.id));
  };
  const addReviewSeries = (movie, review) => {   // NEW
    setMyReviewsSeries( {...myReviewsSeries, [movie.id]: review } )
  };

  return (
   
    <MoviesContext.Provider
      value={{
        favourites,
        favouritesSeries,
        knowFor,
        myReviews,
        addToFavourites,
        addToFavouritesSeies,
        removeFromFavourites,
        removeFromFavouritesSeries,
        addReview,
        addReviewSeries,
        setKnown,    // NEW
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
