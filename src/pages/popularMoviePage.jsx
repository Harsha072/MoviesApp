import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies, getUpcomingMovies, getPopularMovies } from "../api/tmdb-api";
import { useQuery, QueryClient, } from "react-query";
import useFiltering from "../hooks/useFiltering";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

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

const queryClient = new QueryClient()
const PopularMoviePage = (props) => {
  const [page, setPage] = React.useState(1)
  const { data, error, isLoading, isError,isFetching, isPreviousData } = useQuery(["popular",page], getPopularMovies, { keepPreviousData: true, staleTime: 5000 });
  React.useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', page + 1], () =>
      getPopularMovies(page + 1)
      )
    }
  }, [data, page, queryClient])
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

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
  console.log("data in up ",data)
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate
      title='Popular Movies'
      movies={displayedMovies}
      setPage={setPage}
      page={page}
      isFetching={isFetching}
      isPreviousData={isPreviousData}
       action={(movie) => {
          return 
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
export default PopularMoviePage;