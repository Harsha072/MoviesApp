

import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery, QueryClient, } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";

import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
const queryClient = new QueryClient()
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
  const [page, setPage] = React.useState(1)
  const { data, error, isLoading, isError,isFetching, isPreviousData } = useQuery(["discover",page], getMovies, { keepPreviousData: true, staleTime: 5000 });
  const { filterValues, setFilterValues, filterFunction } = useFiltering( [], [titleFiltering, genreFiltering] );
  React.useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', page + 1], () =>
      getMovies(page + 1)
      )
    }
  }, [data, page, queryClient])
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
  console.log("data in home page ",page)
  const displayedMovies = filterFunction(movies);


  return (
    <>
       <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        setPage={setPage}
        page={page}
        isFetching={isFetching}
        isPreviousData={isPreviousData}
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

