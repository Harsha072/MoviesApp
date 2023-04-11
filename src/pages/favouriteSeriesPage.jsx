import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { seriesNameFilter } from "../components/seriesFilterUI";
import RemoveFromFavourites from "../components/cardIconsSeries/removeFromFavourites";
import WriteReview from "../components/cardIconsSeries/writeReview";
import EmptyMovieList from "./emptyListPage";

const nameFiltering = {
  name: "name",
  value: "",
  condition: seriesNameFilter,
};
export const genreFiltering = {
  name: "genre",
  value: "0",
  condition: function (movie, value) {
    // Is user selected genre in this movies's genre list? 
    // Always true if selected genre ia All (0).
    const genreId = Number(value);
    const genre_ids = movie.genres.map((g) => g.id);
    return genreId > 0 ? genre_ids.includes(genreId) : true;
  },
};

const FavouriteSeriesPage = () => {
  const { favouritesSeries: movieIds } = useContext(MoviesContext);
 
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [nameFiltering, genreFiltering]
  );
console.log("series un fav::: ",movieIds)
  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["series", { id: movieId }],
        queryFn: getSeries,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteMovieQueries.map((q) => q.data);
  const displayMovies = allFavourites
    ? filterFunction(allFavourites)
    : [];

  

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
    {displayMovies.length === 0 ? (
        <EmptyMovieList></EmptyMovieList>
      ) : (
        <>
          <PageTemplate
        title="Favourite Series"
        movies={displayMovies}
        action={(movie) => {
          return (
            <>
              <RemoveFromFavourites movie={movie} />
              <WriteReview movie={movie} />
            </>
          );
        }}
      />

      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      /> 
        </>
      )}
          
    </>
  );
};

export default FavouriteSeriesPage;