import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateActorPage";
import useMovie from "../hooks/useMovie";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieList from "../components/movieList";
import ActorDetails from "../components/actorDetails"


const ActorDetailsPage = (props) => {
 

  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

 

//   if (similarMovie) {
//     // Use the data here
//     console.log("for data ",similarMovie);
//   } else {
//     // Handle the case where the data is not yet available
//   }
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
            <ActorDetails movie={movie} 
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

export default ActorDetailsPage;
