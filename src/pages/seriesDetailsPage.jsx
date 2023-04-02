import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";
import { getMovie,getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieList from "../components/movieList";



const MovieDetailsPage = (props) => {
 
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["series", { id: id }],
    get
  );

  const { data:similarMovie} = useQuery(
    ["similarMovie", { id: id }],
    getSimilarMovies
  );

  if (similarMovie) {
    // Use the data here
    console.log("for data ",similarMovie);
  } else {
    // Handle the case where the data is not yet available
  }
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} similarMovie={similarMovie}
             action={(movie) => {
              return  
            }} />
             
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
