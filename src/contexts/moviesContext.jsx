import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
const [myReviews, setMyReviews] = useState( {} )
const [knowFor, setKnownFor] = useState( {} )

  const addToFavourites = (movie) => {
    console.log("added")
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    console.log("favvvvvv ",favourites)
    setFavourites(updatedFavourites);
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
  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
   
    <MoviesContext.Provider
      value={{
        favourites,
        knowFor,
        addToFavourites,
        removeFromFavourites,
        addReview,
        setKnown,    // NEW
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
