import React from "react";
import PageTemplate from "../components/templateSeriesPage";
import ReviewForm from "../components/reviewSeriesForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie, getSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewSeriesPage = (props) => {
  console.log("add series page:::: ")
  const location = useLocation()
  const { movieId } = location.state;
  const { data: movie, error, isLoading, isError } = useQuery(
    ["series", { id: movieId }],
    getSeries
  );
  console.log("the data ",movie)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate movie={movie}>
      <ReviewForm movie={movie} />
    </PageTemplate>
  );
};

export default WriteReviewSeriesPage;
