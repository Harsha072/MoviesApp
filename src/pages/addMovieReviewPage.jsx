import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie,getMovieCredits } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  console.log("the reive page ")
  const location = useLocation()
  const { movieId } = location.state;
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: movieId }],
    getMovie
  );
  const { data:credits,error:similarerror, isLoading:isSimilarLoading, isError:isSimilarError  } = useQuery(
    ["credits", { id: movieId }],
    getMovieCredits
  );
  console.log("still loading 1 ",isLoading,isSimilarLoading )
  if (isLoading || isSimilarLoading) {
    console.log("still loading ::: ")
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate movie={movie} credits={credits}>
      <ReviewForm movie={movie}  credits={credits} />
    </PageTemplate>
  );
};

export default WriteReviewPage;
