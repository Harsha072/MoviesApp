import React, { useContext,useState,useEffect } from "react";
import PageTemplate from "../components/templateTvSeriesPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getSeries, addFavouriteSeries,getFavourite } from "../api/tmdb-api";
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
  const [favouriteMoviesResponseOut, setFavouriteMoviesResponse] = useState(null);

 
  
  useEffect(() => {
    const fetchFavouriteMovies = async () => {
      try {
        if (movieIds && movieIds.length > 0) {
          // Use a Set to store unique movieIds
          const uniqueMovieIds = new Set(movieIds);
  
          // Convert the Set back to an array
          const uniqueMovieIdsArray = Array.from(uniqueMovieIds);
  
          if (uniqueMovieIdsArray.length > 0) {
            const addFavouriteResponse = await addFavouriteSeries(uniqueMovieIdsArray);
            console.log("Favorite series added:", addFavouriteResponse.favourites);
          }
        }
  
        const response = await getFavourite();
        console.log("the resposne for seres ",response)
        const filtred = response.filter((movie) => movie.type === "series")
        const flattenedMovieIds = filtred.flatMap((movie) => movie.movieId);
        console.log("flattenedMovieIds series :", flattenedMovieIds);
  
        setFavouriteMoviesResponse(flattenedMovieIds);
        console.log("Fetched favorite movies:", response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchFavouriteMovies();
  }, []);
  
  console.log("movie id:", movieIds);
  console.log("out:", favouriteMoviesResponseOut);
  
  let updatedMovieIds = [];
  
  if (Array.isArray(movieIds) && movieIds.length >= 0 && favouriteMoviesResponseOut) {
    const uniqueMovieIds = new Set([...movieIds, ...favouriteMoviesResponseOut]);
    updatedMovieIds = Array.from(uniqueMovieIds);
  } else {
    console.log("movieIds is not an empty array");
  }
  
  console.log("updated movieIds:", updatedMovieIds);



  const favouriteMovieQueries = useQueries(
    updatedMovieIds.map((movieId) => {
     
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getSeries,
      };
    })
  );
console.log("fab ",favouriteMovieQueries)
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
        series={displayMovies}
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