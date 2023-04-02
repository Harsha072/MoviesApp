import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateActorPage";
import useMovie from "../hooks/useMovie";
import { getActor, getActorCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieList from "../components/movieList";
import ActorDetails from "../components/actorDetails"
import { MoviesContext } from "../contexts/moviesContext";

const ActorDetailsPage = () => {
 const { knowFor }= useContext(MoviesContext)

  const { id } = useParams();

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );
  const { data: credits} = useQuery(
    ["actorCredits", { id: id }],
    getActorCredits
  );

 console.log("details page ",knowFor)


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    
    <>
      {actor ? (
        <>
          <PageTemplate movie={actor}>
            <ActorDetails movie={actor} credits={knowFor}
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
