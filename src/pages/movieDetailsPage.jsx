import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { MoviesContext } from "../contexts/moviesContext";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";
import { getMovie,getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieList from "../components/movieList";



const MovieDetailsPage = (props) => {
  console.log("in movies detail page")
  const { myReviews: review } = useContext(MoviesContext);

  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data:similarMovie} = useQuery(
    ["favsimilarMovie", { id: id }],
    getSimilarMovies
  );
console.log("got similar ",similarMovie)
  if (similarMovie) {
    // Use the data here
    console.log("for data ",similarMovie);
    console.log("reviews in details page ",review)
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
