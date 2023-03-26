// import React, { useState, useEffect } from "react";
// import PageTemplate from "../components/templateMovieListPage";
// import { getMovies } from "../api/tmdb-api";
// import useFiltering from "../hooks/useFiltering";
// import MovieFilterUI, {
//   titleFilter,
//   genreFilter,
// } from "../components/movieFilterUI";

// const titleFiltering = {
//   name: "title",
//   value: "",
//   condition: titleFilter,
// };
// const genreFiltering = {
//   name: "genre",
//   value: "0",
//   condition: genreFilter,
// };

// const HomePage = (props) => {
//   const [movies, setMovies] = useState([]);
//   const favourites = movies.filter((m) => m.favourite);
//   const { filterValues, setFilterValues, filterFunction } = useFiltering(
//     [],
//     [titleFiltering, genreFiltering]
//   );

//   localStorage.setItem("favourites", JSON.stringify(favourites));

//   const addToFavourites = (movieId) => {
//     const updatedMovies = movies.map((m) =>
//       m.id === movieId ? { ...m, favourite: true } : m
//     );
//     setMovies(updatedMovies);
//   };

//   const changeFilterValues = (type, value) => {
//     const changedFilter = { name: type, value: value };
//     const updatedFilterSet =
//       type === "title"
//         ? [changedFilter, filterValues[1]]
//         : [filterValues[0], changedFilter];
//     setFilterValues(updatedFilterSet);
//   };

//   useEffect(() => {
//     getMovies().then((movies) => {
//       setMovies(movies);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const displayedMovies = filterFunction(movies);

//   return (
//     <>
//       <PageTemplate
//         title="Discover Movies"
//         movies={displayedMovies}
//         selectFavourite={addToFavourites}
//       />
//       <MovieFilterUI
//         onFilterValuesChange={changeFilterValues}
//         titleFilter={filterValues[0].value}
//         genreFilter={filterValues[1].value}
//       />
//     </>
//   );
// };

// export default HomePage;


import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";

import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);
  const { filterValues, setFilterValues, filterFunction } = useFiltering( [], [titleFiltering, genreFiltering] );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  console.log("data in home page ",data)
  const displayedMovies = filterFunction(movies);


  return (
    <>
       <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default HomePage;

