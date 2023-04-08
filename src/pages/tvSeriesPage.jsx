import React from "react";
import PageTemplate from "../components/templateTvSeriesPage";
import { useQuery, QueryClient, } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { getPopularTvSeries } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import SeriesFilterUI from "../components/seriesFilterUI"

import { seriesNameFilter, genreFilter } from "../components/seriesFilterUI";

const nameFiltering = {
  name: "name",
  value: "",
  condition: seriesNameFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};
const queryClient = new QueryClient()
const TvSeriesPage = (props) => {
  const [page, setPage] = React.useState(1)
  const { data, error, isLoading, isError, isFetching, isPreviousData } = useQuery(["series", page], getPopularTvSeries, { keepPreviousData: true, staleTime: 5000 });

  const { filterValues, setFilterValues, filterFunction } = useFiltering([], [nameFiltering, genreFiltering]);
  React.useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', page + 1], () =>
        getPopularTvSeries(page + 1)
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

  const series = data ? data.results : [];
  console.log("data in tv page ", data)
  const displayedSeries = filterFunction(series);


  return (
    <>
      <PageTemplate
        title="Popular Series"
        series={displayedSeries}
        setPage={setPage}
        page={page}
        isFetching={isFetching}
        isPreviousData={isPreviousData}
        action={(series) => {
          return <AddToFavouritesIcon movie={series} />
        }}
      />
      <SeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default TvSeriesPage;
