import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";

const MovieReviewPage = (props) => {
  const { state : {movie, review,credits } } = useLocation()
  return (
    <PageTemplate movie={movie} credits={credits}>
      <MovieReview review={review} credits={credits} />
    </PageTemplate>
  );
};

export default MovieReviewPage;
