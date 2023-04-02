import React from "react";
import PageTemplate from "../components/templateTvSeriesPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import {  getPopularTvSeries } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";

import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import { seriesNameFilter } from "../components/seriesFilterUI";

const nameFiltering = {
    name: "name",
    value: "",
    condition: seriesNameFilter,
  };
// const genreFiltering = {
//   name: "genre",
//   value: "0",
//   condition: genreFilter,
// };

const TvSeriesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("series", getPopularTvSeries);
  const { filterValues, setFilterValues, filterFunction } = useFiltering( [], [nameFiltering] );

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
  console.log("data in tv page ",data)
  const displayedMovies = filterFunction(movies);


  return (
    <>
       <PageTemplate
        title="Popular Series"
        movies={displayedMovies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
       
      />
    </>
  );
};

export default TvSeriesPage;
